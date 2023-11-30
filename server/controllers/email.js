const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'utkarsh.2002a@gmail.com',
      pass: 'afvosgexcqyhddhj',
    },
  });

const sendEmail = async(req,res) => {
    try {
        const { to, subject, text } = req.body;
        const mailOptions = {
          from: 'utkarsh.2002a@gmail.com',
          to: to,
          subject: subject,
          text: text,
        };
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email sent successfully' });
      } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Internal server error' });
      }
}

module.exports = {sendEmail}