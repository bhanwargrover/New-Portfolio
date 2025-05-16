// Backend/server.js

const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Replace these with your actual Gmail credentials
const EMAIL = "bhavargrover4@gmail.com";
const PASSWORD = "dioaygfvwymzzxvq";

// Allowed origins array (Add your frontend URLs here)
const allowedOrigins = [
  "https://peppy-gaufre-8bd264.netlify.app",        // Your current Netlify frontend URL
  "https://delicate-salmiakki-c87bfb.netlify.app",  // Old/other allowed URL if needed
  // Add more origins if needed
];

app.use(cors({
    origin: function(origin, callback) {
        // Allow requests with no origin like Postman or curl
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1) {
            const msg = `CORS policy: The origin ${origin} is not allowed.`;
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    },
    methods: ["GET", "POST"],
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
