// Example backend logic (Node.js/Express)
const express = require('express');
const nodemailer = require('nodemailer'); // To send emails
const app = express();

app.use(express.json());

let generatedOTP = null; // Store OTP temporarily (better to store in DB for real cases)

// Send OTP to user's email
app.post('/send-otp', (req, res) => {
  const { email } = req.body;
  generatedOTP = Math.floor(100000 + Math.random() * 900000); // Generate 6-digit OTP

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'your-email@gmail.com',
      pass: 'your-email-password',
    },
  });

  const mailOptions = {
    from: 'your-email@gmail.com',
    to: email,
    subject: 'Password Reset OTP',
    text: `Your OTP for password reset is: ${generatedOTP}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send('Failed to send OTP');
    }
    res.status(200).send('OTP sent successfully');
  });
});

app.listen(5000, () => console.log('Server running on port 5000'));
