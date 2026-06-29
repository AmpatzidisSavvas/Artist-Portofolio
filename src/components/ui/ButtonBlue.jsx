import React from "react";

const ButtonBlue = ({ title, id, leftIcon, containerClass, onClick, href, type = "button", disabled = false }) => {
	return (
		<button
			id={id}
			type={type}
			disabled={disabled}
			onClick={(e) => {
				// Only prevent default behavior if this is NOT a submit button
				if (type !== "submit") {
					e.preventDefault();
				}

				if (href) {
					window.open(href, "_blank");
				}

				if (onClick) {
					onClick(e);
				}
			}}
			className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-blue-400 px-8 py-3 text-zinc-100 font-bold  shadow-[5px_5px_0_0_#1565C0] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-500 ease-in-out ${containerClass}`}
		>
			{leftIcon}
			<span className="relative inline-flex overflow-hidden font-general text-xs">
				<div>{title}</div>
			</span>
		</button>
	);
};

export default ButtonBlue;
