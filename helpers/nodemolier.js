const { createTransport } = require("nodemailer");

var transporter = createTransport({
  service: "gmail",
  // host: "sandbox.smtp.mailtrap.io",
  // port: 2525,
  auth: {
    user: `${process.env.EMAIL}`,
    pass: `${process.env.EMAIL_PASS}`,
  },
});
module.exports = { transporter };
