const functions = require("firebase-functions");
const nodemailer = require("nodemailer"); // 👉 Install nodemailer obligatory
const dotenv = require("dotenv"); // 👉 Install dotenv obligatory
dotenv.config(); // 👉 env variables must be at root of /functions folder obligatory

// ----------------------------------------------------------- Send email via gmail   ------------------------------------------------------------- //

const transport = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

transport
  .verify()
  .then(() => {
    console.log("SMTP server connection successful (enviorment variables loaded correctly) 🚀");
  })
  .catch((error: Error) => {
    console.error(
      "SMTP server connection error (enviorment variables are possibly undefined) 🥺:",
      error
    );
  });

const sendContactForm = (form: any) => {
  return transport
    .sendMail({
      subject: `Hey there, let's connect! ${form?.emoji}`,
      bcc: "gustavoq26@gmail.com",
      html: `<h3>This person has sent you an email 👀</h3>
        <p> From: ${form?.email} </p>
        <p> Subject: ${form?.subject} </p>
        <p> Message: ${form?.message} </p>
        `,
    })
    .catch((error: Error) =>
      console.log("If you see this, sender function is not working 🥲", error)
    );
};

exports.formFunction = functions.https.onRequest((request: any, response: any) => {
  response.set("Access-Control-Allow-Origin", "*");
  response.set("Access-Control-Allow-Methods", "POST");
  response.set("Access-Control-Allow-Headers", "Content-Type");

  if (request.body.emoji !== undefined) {
    sendContactForm(request.body);
    return response.json({ message: "Email sent succesfully! 🙌" });
  } else return response.json({ message: "Some values inside body might be undefined 🥲" });
});
