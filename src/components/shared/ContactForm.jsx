import { useState } from "react";
import Button from "../ui/Button";

export default function ContactForm() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
		twitterHandle: "" // Invisible honeypot field to trap spam bots
	});
	const [status, setStatus] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		// Anti-Spam: If a bot fills out this hidden input, drop the request silently
		if (formData.twitterHandle) {
			setStatus("Message sent successfully!");
			setFormData({ name: "", email: "", message: "", twitterHandle: "" });
			return;
		}

		setIsSubmitting(true);
		setStatus("Sending your message...");

		try {
			const response = await fetch("/api/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					name: formData.name,
					email: formData.email,
					message: formData.message
				})
			});

			let result = {};
			const contentType = response.headers.get("content-type");
			if (contentType && contentType.includes("application/json")) {
				result = await response.json();
			} else {
				// Fallback if Vercel drops a raw html or text error response string
				const textFallback = await response.text();
				console.error("Non-JSON Response received:", textFallback);
			}

			if (response.ok && result.success) {
				setStatus("Thank you! Your message has been sent.");
				setFormData({ name: "", email: "", message: "", twitterHandle: "" });
			} else {
				// If the parsing step failed to fetch an error message string, read the HTTP status instead
				setStatus(result.error || `Server responded with status code: ${response.status}`);
			}
		} catch (error) {
			console.error("Frontend Form Submission Catch Error:", error);
			setStatus("Network error or connection timed out. Please try again later.");
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<div className="w-full rounded-2xl  p-6 sm:p-8 shadow-sm border border-slate-100 text-left">
			<h2 className="mb-6 text-center text-2xl font-bold tracking-tight text-blue-50">Get in Touch</h2>

			<form onSubmit={handleSubmit} className="flex flex-col gap-5">
				{/* --- HONEYPOT FIELD (Hidden from real users) --- */}
				<div className="hidden" aria-hidden="true">
					<input type="text" name="twitterHandle" value={formData.twitterHandle} onChange={handleChange} tabIndex="-1" autoComplete="off" />
				</div>

				<div className="flex flex-col gap-1.5">
					<label htmlFor="name" className="text-sm font-semibold text-blue-50">
						Name
					</label>
					<input
						type="text"
						id="name"
						name="name"
						required
						maxLength="100"
						value={formData.name}
						onChange={handleChange}
						placeholder="Your name"
						className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-slate-900 placeholder-slate-400 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
					/>
				</div>

				<div className="flex flex-col gap-1.5">
					<label htmlFor="email" className="text-sm font-semibold text-blue-50">
						Email
					</label>
					<input
						type="email"
						id="email"
						name="email"
						required
						maxLength="150"
						value={formData.email}
						onChange={handleChange}
						placeholder="you@example.com"
						className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-slate-900 placeholder-slate-400 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
					/>
				</div>

				<div className="flex flex-col gap-1.5">
					<label htmlFor="message" className="text-sm font-semibold text-blue-50">
						Message
					</label>
					<textarea
						id="message"
						name="message"
						required
						maxLength="2000"
						rows="5"
						value={formData.message}
						onChange={handleChange}
						placeholder="Type your message here..."
						className="w-full resize-y rounded-lg border border-slate-200 px-4 py-2.5 text-slate-900 placeholder-slate-400 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
					/>
				</div>
				<Button
					title={isSubmitting ? "Sending..." : "Send Message"}
					type="submit"
					disabled={isSubmitting}
					containerClass="!bg-yellow-300 flex-center gap-1 w-full sm:w-auto"
				/>
			</form>

			{status && (
				<p
					className={`mt-4 text-center text-sm font-medium ${
						status.includes("Thank you") || status.includes("successfully") ? "text-emerald-600" : "text-rose-600"
					}`}
				>
					{status}
				</p>
			)}
		</div>
	);
}
