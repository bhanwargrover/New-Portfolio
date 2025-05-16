const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = 5000;  // Hardcoded port

app.use(cors({ origin: '*' }));
app.use(express.json());

app.post('/send-email', async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'bhavargrover4@gmail.com',      // Your Gmail address
        pass: 'dioaygfvwymzzxvq'              // Your Gmail App Password
      }
    });

    const mailOptions = {
      from: email,
      to: 'bhavargrover4@gmail.com',
      subject: subject || `New message from ${name} - ${email}`,
      text: message
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
