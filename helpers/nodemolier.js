const { createTransport } = require("nodemailer");

const transporter = createTransport({
  host: "smtp.office365.com",
  port: 587,
  secure: false, // upgrade later with STARTTLS
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
});

// const transporter = createTransport({
//   service: "gmail",
//   auth: {
//     user: `${process.env.EMAIL}`,
//     pass: `${process.env.EMAIL_PASS}`,
//   },
// });
module.exports = { transporter };
