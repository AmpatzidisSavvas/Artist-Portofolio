import React from "react";

const Button = ({ title, id, leftIcon, containerClass, onClick, href, type = "button", disabled = false }) => {
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
			className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black transition-transform duration-400 ease-in-out hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 ${containerClass}`}
		>
			{leftIcon}
			<span className="relative inline-flex overflow-hidden font-general text-xs">
				<div>{title}</div>
			</span>
		</button>
	);
};

export default Button;
