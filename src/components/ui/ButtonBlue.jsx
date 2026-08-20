import React from "react";

const ButtonBlue = ({ title, id, leftIcon, containerClass, onClick, href, type = "button", disabled = false }) => {
	return (
		<button
			id={id}
			type={type}
			disabled={disabled}
			onClick={(e) => {
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
			className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-blue-400 px-8 py-4  text-zinc-100 font-bold shadow-[5px_5px_0_0_#1565C0] transition-all duration-300 ease-in-out md:hover:translate-x-1 md:hover:translate-y-1 md:hover:shadow-none active:translate-x-1 active:translate-y-1 active:shadow-none ${containerClass}`}
		>
			{leftIcon}
			<span className="relative inline-flex overflow-hidden font-general text-xs pointer-events-none">
				<div>{title}</div>
			</span>
		</button>
	);
};

export default ButtonBlue;
