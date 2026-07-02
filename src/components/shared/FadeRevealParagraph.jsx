import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FadeRevealParagraph({ paragraphs = [], highlights = [], highlightColor = "#ff0000" }) {
	const containerRef = useRef(null);

	useEffect(() => {
		if (!containerRef.current || paragraphs.length === 0) return;

		const allChars = containerRef.current.querySelectorAll(".reveal-char");

		const scrollConfig = {
			trigger: containerRef.current,
			start: "top 75%",
			end: "bottom 45%",
			scrub: true
		};

		let ctx = gsap.context(() => {
			gsap.fromTo(
				allChars,
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
	}, [paragraphs]);

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
