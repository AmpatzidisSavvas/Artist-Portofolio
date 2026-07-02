import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FadeRevealParagraph({ paragraphs = [], highlights = [], highlightColor = "#ff0000" }) {
	const containerRef = useRef(null);

	useEffect(() => {
		if (!containerRef.current || paragraphs.length === 0) return;

		// Grab all generated characters across all paragraphs
		const allChars = containerRef.current.querySelectorAll(".reveal-char");

		const scrollConfig = {
			trigger: containerRef.current,
			start: "top 75%", // Starts revealing when the top of the text block is 75% down the viewport
			end: "bottom 45%", // Finishes when the text block passes up past 45%
			scrub: true
		};

		let ctx = gsap.context(() => {
			gsap.fromTo(
				allChars,
				{ opacity: 0.2 },
				{
					opacity: 1,
					duration: 0.3,
					stagger: 0.01, // Smooth consecutive flow through every single paragraph
					scrollTrigger: scrollConfig
				}
			);
		});

		return () => ctx.revert();
	}, [paragraphs]);

	// Helper function to handle word matching for highlights
	const shouldHighlight = (word) => {
		const cleanWord = word
			.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()“”]/g, "")
			.toLowerCase()
			.trim();
		return highlights.some((h) => cleanWord.includes(h.toLowerCase().trim()) || h.toLowerCase().trim().includes(cleanWord));
	};

	return (
		<div ref={containerRef} className="w-full select-none">
			{paragraphs.map((paraText, paraIdx) => {
				const words = paraText.split(" ");

				return (
					<p key={paraIdx} className="text-base leading-relaxed mb-6 last:mb-0">
						{words.map((word, wordIdx) => {
							const isHighlighted = shouldHighlight(word);

							return (
								<span key={wordIdx} className="inline-block whitespace-nowrap" style={{ color: isHighlighted ? highlightColor : "inherit" }}>
									{word.split("").map((char, charIdx) => (
										<span key={charIdx} className="reveal-char inline-block opacity-20">
											{char}
										</span>
									))}
									{/* Space between words */}
									<span className="reveal-char inline-block opacity-20">&nbsp;</span>
								</span>
							);
						})}
					</p>
				);
			})}
		</div>
	);
}
