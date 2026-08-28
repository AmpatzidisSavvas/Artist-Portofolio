import { useMemo } from "react";

const SimpleText = ({ sentence = "", separator = " ", textColor = "text-white" }) => {
	const words = useMemo(() => sentence.split(separator), [sentence, separator]);

	return (
		<div className="relative flex flex-col sm:flex-row flex-wrap gap-y-3 sm:gap-x-4 justify-start items-start sm:items-center w-full select-none outline-none">
			{words.map((word, index) => (
				<span key={`${word}-${index}`} className={`text-[1rem] sm:text-[1.4rem] font-bold tracking-tight select-none ${textColor}`}>
					{word}
				</span>
			))}
		</div>
	);
};

export default SimpleText;
