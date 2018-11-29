const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.EMAIL_PASSWORD
  }
});

const sendVerificationEmail = async function(email, key) {
  const mailOptions = {
    from: 'Youth Coalition of Columbia',
    to: email,
    subject: 'Please verify your account',
    text: process.env.ADDRESS + '/api/auth/validate?key=' + key,
  };

  return transporter.sendMail(mailOptions);
};

module.exports = {
  sendVerificationEmail: sendVerificationEmail
};