import { useEffect } from "react";

const InstagramFeed = () => {
	useEffect(() => {
		const script = document.createElement("script");
		script.src = "https://cdn.lightwidget.com/widgets/lightwidget.js";
		script.async = true;
		document.body.appendChild(script);
	});
	return (
		<div className="w-full max-w-7xl mx-auto px-4">
			<iframe
				src="https://lightwidget.com/widgets/YOUR_WIDGET_ID.html"
				loading="lazy"
				allowTransparency="true"
				className="
                        w-full
                        border-0
                        overflow-hidden
                        h-[600px]
                        rounded-2xl
                        shadow-sm
                "
				title="Instagram Feed"
			></iframe>
		</div>
	);
};

export default InstagramFeed;
