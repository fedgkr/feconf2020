import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as sgMail from '@sendgrid/mail';

require('dotenv').config({ path: '.env' });
admin.initializeApp();
const { SENDGRID_API, WELCOME_MAIL_TEMPLATE_ID } = process.env as { [key: string]: string };

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions
  .https.onRequest((request, response) => {
    functions.logger.info("Hello logs!", {structuredData: true});
    response.send("Hello from Firebase!" + process.env.SENDGRID_API);
  });

export const onSupportAdded = functions
  .firestore.document('supports/{supportsId}')
  .onCreate(async (snapshot, context) => {
    const { user } = snapshot.data();
    if (snapshot.id === 'metadata') {
      return;
    }
    const metadataRef = admin.firestore().collection('supports').doc('metadata');
    const count = admin.firestore.FieldValue.increment(1);
    metadataRef.update({ count });
    if (user && user.email && user.displayName) {
      try {
        await sendMail(user.email, user.displayName);
        functions.logger.info(`Email sent to ${user.email}`, { structuredData: true });
      } catch (err) {
        functions.logger.error(`
          Email send Failed to ${user.email},
          error message : ${err.message},
          SENDGRID_API: ${SENDGRID_API},
          WELCOME_MAIL_TEMPLATE_ID: ${WELCOME_MAIL_TEMPLATE_ID},
          `, { structuredData: true });
      }
    }
  });

async function sendMail(to: string, displayName: string) {
  const msg = {
    to,
    subject: 'FEConf 2020을 응원해주셔서 감사합니다.',
    from: 'feconf@googlegroups.com',
    templateId: WELCOME_MAIL_TEMPLATE_ID,
    dynamicTemplateData: { displayName },
  };
  sgMail.setApiKey(SENDGRID_API);
  return sgMail.send(msg);
}
