import nodemailer from "nodemailer";

export default async function handler(req, res) {
	if (req.method !== "POST") {
		return res.status(405).json({ error: "Method not allowed" });
	}

	const { name, email, message } = req.body;

	if (!name || !email || !message) {
		return res.status(400).json({ error: "All fields are required." });
	}
	if (email.length > 150 || !email.includes("@")) {
		return res.status(400).json({ error: "Invalid email address." });
	}
	if (message.length > 2000) {
		return res.status(400).json({ error: "Message exceeds character limit." });
	}

	const transporter = nodemailer.createTransport({
		host: process.env.SMTP_HOST,
		port: 465,
		secure: true,
		auth: {
			user: process.env.SMTP_USER,
			pass: process.env.SMTP_PASS
		}
	});

	try {
		await transporter.sendMail({
			from: `${name} <${process.env.SMTP_USER}>`,
			to: process.env.RECEIVER_EMAIL,
			replyTo: email,
			subject: `📩 Website Message from ${name}`,
			text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
		});

		return res.status(200).json({ success: true, message: "Email sent successfully!" });
	} catch (error) {
		console.error("SMTP Error:", error);
		return res.status(500).json({ error: "Failed to process email delivery." });
	}
}
