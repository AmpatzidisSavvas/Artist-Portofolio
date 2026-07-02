import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TextReveal({ text, highlights = [], highlightColor = "#EC407A" }) {
	const containerRef = useRef(null);

	useEffect(() => {
		if (!containerRef.current) return;

		// Target all span characters inside our container
		const chars = containerRef.current.querySelectorAll(".reveal-char");

		const scrollConfig = {
			trigger: containerRef.current,
			start: "top 85%",
			end: "top 45%",
			scrub: true
		};

		let ctx = gsap.context(() => {
			// Clean, lightweight GSAP scroll animation
			gsap.fromTo(
				chars,
				{ opacity: 0.2 },
				{
					opacity: 1,
					duration: 0.3,
					stagger: 0.01,
					scrollTrigger: scrollConfig
				}
			);
		});

		return () => ctx.revert();
	}, [text]);

	// Helper function to check if a word should be highlighted based on your props array
	const shouldHighlight = (word) => {
		const cleanWord = word
			.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()“”]/g, "")
			.toLowerCase()
			.trim();
		return highlights.some((h) => cleanWord.includes(h.toLowerCase().trim()) || h.toLowerCase().trim().includes(cleanWord));
	};

	// Split the raw string into words, then split words into individual animated characters
	const words = text.split(" ");

	return (
		<span ref={containerRef} className="inline-block w-full select-none">
			{words.map((word, wordIdx) => {
				const isHighlighted = shouldHighlight(word);

				return (
					<span key={wordIdx} className="inline-block whitespace-nowrap" style={{ color: isHighlighted ? highlightColor : "inherit" }}>
						{word.split("").map((char, charIdx) => (
							<span key={charIdx} className="reveal-char inline-block opacity-20">
								{char}
							</span>
						))}
						{/* Add spacing back between words */}
						<span className="reveal-char inline-block opacity-20">&nbsp;</span>
					</span>
				);
			})}
		</span>
	);
}
