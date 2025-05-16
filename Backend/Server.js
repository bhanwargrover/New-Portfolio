// Backend/server.js

const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Replace these with your actual Gmail credentials
const EMAIL = "bhavargrover4@gmail.com";
const PASSWORD = "dioaygfvwymzzxvq";

// CORS setup for your Netlify site
app.use(cors({
    origin: "https://delicate-salmiakki-c87bfb.netlify.app",
    methods: "GET,POST",
    credentials: true,
}));

app.use(express.json());

app.post("/send-email", async (req, res) => {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
        return res.status(400).json({ error: "All fields are required" });
    }

    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: EMAIL,
                pass: PASSWORD,
            },
        });

        const mailOptions = {
            from: email,
            to: EMAIL,
            subject: `New message from ${name} - ${subject}`,
            text: `From: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        };

        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
        console.error("Error while sending email:", error);
        res.status(500).json({ error: "Something went wrong" });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
