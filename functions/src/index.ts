import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as sgMail from '@sendgrid/mail';

require('dotenv').config({ path: '.env' });
const { SENDGRID_API, WELCOME_MAIL_TEMPLATE_ID } = process.env as { [key: string]: string };
admin.initializeApp();
sgMail.setApiKey(SENDGRID_API);

export const onUserCreated = functions
  .firestore.document('users/{userId}')
  .onCreate(async (snapshot, context) => {
    const { email, displayName } = snapshot.data();
    try {
      const response = await sendMail(email, displayName);
      functions.logger.info(`Email sent to ${email}`, response);
    } catch (err) {
      functions.logger.error(`
        Email send Failed to ${email},
        error message : ${err.message},
        SENDGRID_API: ${SENDGRID_API},
        WELCOME_MAIL_TEMPLATE_ID: ${WELCOME_MAIL_TEMPLATE_ID},
      `);
    }
  });

export const onSupportCreated = functions
  .firestore.document('supports/{supportId}')
  .onCreate(async (snapshot, context) => incrementCount());

async function sendMail(to: string, displayName: string) {
  const subject = 'FEConf 2020을 응원해주셔서 감사합니다.';
  const msg = {
    to,
    subject,
    from: 'FEConf <feconf@googlegroups.com>',
    templateId: WELCOME_MAIL_TEMPLATE_ID,
    dynamicTemplateData: { subject, displayName },
  };
  functions.logger.info(`message`, msg);
  return sgMail.send(msg);
}

async function incrementCount() {
  const start = Date.now();
  const metadataRef = admin.firestore().collection('supports').doc('metadata');
  const count = admin.firestore.FieldValue.increment(1);
  await metadataRef.update({ count });
  functions.logger.info(`increment duration`, Date.now() - start);
}
