"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onSupportAdded = exports.helloWorld = void 0;
const functions = require("firebase-functions");
const sgMail = require("@sendgrid/mail");
require('dotenv').config({ path: '.env' });
const { SENDGRID_API, WELCOME_MAIL_TEMPLATE_ID, FUNCTION_REGION } = process.env;
sgMail.setApiKey(SENDGRID_API);
console.log('FUNCTION_REGION : ', FUNCTION_REGION);
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
exports.helloWorld = functions
    .https.onRequest((request, response) => {
    functions.logger.info("Hello logs!", { structuredData: true });
    response.send("Hello from Firebase!" + process.env.SENDGRID_API);
});
exports.onSupportAdded = functions
    .firestore.document('supports/*')
    .onCreate(async (snapshot, context) => {
    const { user } = snapshot.data();
    if (user && user.email && user.displayName) {
        try {
            await sendMail(user.email, user.displayName);
            functions.logger.info(`Email sent to ${user.email}`, { structuredData: true });
        }
        catch (err) {
            functions.logger.error(`Email send Failed to ${user.email} \n error message : ${err.message}`, { structuredData: true });
        }
    }
});
async function sendMail(to, displayName) {
    const msg = {
        personalizations: [
            {
                to,
                subject: 'FEConf 2020을 응원해주셔서 감사합니다.',
                dynamicTemplateData: {
                    displayName,
                },
            },
        ],
        from: 'feconf@googlegroups.com',
        templateId: WELCOME_MAIL_TEMPLATE_ID,
    };
    return sgMail.send(msg);
}
//# sourceMappingURL=index.js.map