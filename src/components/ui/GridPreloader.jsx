import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Flip } from "gsap/Flip";

gsap.registerPlugin(Flip);

export default function GridPreloader({ onBeforeCollapse, onComplete, logoSrc = "/logo.svg", tileColor, delay = 0 }) {
	const preloaderRef = useRef(null);
	const bgLayerRef = useRef(null);
	const gridRef = useRef(null);
	const markerRef = useRef(null);
	const markerLabelRef = useRef(null);

	useEffect(() => {
		const gridEl = gridRef.current;
		const markerEl = markerRef.current;
		const markerLabelEl = markerLabelRef.current;

		if (!gridEl || !markerEl) return;

		const isDesktop = window.innerWidth >= 1000;
		const baseTileSize = isDesktop ? 85 : 50;

		const snapToOdd = (num) => {
			const val = Math.floor(num);
			return val % 2 === 0 ? val - 1 : val;
		};

		let cols = snapToOdd(window.innerWidth / baseTileSize);
		let rows = snapToOdd(window.innerHeight / baseTileSize);

		const tileSize = Math.min(window.innerWidth / cols, window.innerHeight / rows);

		cols += 2;
		rows += 2;

		gridEl.style.width = `${cols * tileSize}px`;
		gridEl.style.height = `${rows * tileSize}px`;

		gridEl.innerHTML = "";
		const tiles = [];
		const totalTiles = cols * rows;

		for (let i = 0; i < totalTiles; i++) {
			const tile = document.createElement("div");
			tile.className = "opacity-0";
			tile.style.backgroundColor = tileColor;

			tile.style.width = `${tileSize}px`;
			tile.style.height = `${tileSize}px`;
			gridEl.appendChild(tile);
			tiles.push(tile);
		}

		const midRow = Math.floor(rows / 2);
		const centerCol = Math.floor(cols / 2);

		const getTileAt = (col, row = midRow) => tiles[row * cols + col];

		const colOffsets = isDesktop ? [-4, -2, 2, 0] : [-2, -1, 1, 0];
		const stopTiles = colOffsets.map((offset) => getTileAt(centerCol + offset));
		const finalCenterStop = stopTiles[3];

		stopTiles.forEach((tile) => {
			tile.style.backgroundColor = "#ffffff";
			tile.style.outlineColor = "#ffffff";
			tile.classList.remove("opacity-0");
			tile.classList.add("opacity-100");
		});

		const nonStopTiles = tiles.filter((tile) => !stopTiles.includes(tile));

		markerEl.style.width = `${tileSize}px`;
		markerEl.style.height = `${tileSize}px`;

		const placeMarkerOnTile = (tile) => {
			const tileRect = tile.getBoundingClientRect();
			const parentRect = preloaderRef.current.getBoundingClientRect();
			markerEl.style.left = `${tileRect.left - parentRect.left}px`;
			markerEl.style.top = `${tileRect.top - parentRect.top}px`;
		};

		placeMarkerOnTile(stopTiles[0]);

		const moveMarkerTo = (targetTile, newLabel) => {
			const state = Flip.getState(markerEl);
			placeMarkerOnTile(targetTile);
			if (newLabel) markerLabelEl.innerHTML = newLabel;
			Flip.from(state, {
				duration: 0.45,
				ease: "power2.inOut"
			});
		};

		const tl = gsap.timeline({
			delay,
			onComplete: () => {
				if (onComplete) onComplete();
			}
		});

		// 1. Grid tiles fade in
		tl.to(nonStopTiles, {
			opacity: 1,
			duration: 0.4,
			stagger: { amount: 0.6, from: "random" },
			ease: "power1.out"
		});

		// 2. Target stops turn back to main tile color
		tl.to(
			stopTiles.slice(0, 3),
			{
				backgroundColor: tileColor,
				outlineColor: tileColor,
				duration: 0.3,
				stagger: 0.25
			},
			"+=0.2"
		);

		// 3. Progress marker movement
		tl.add(() => moveMarkerTo(stopTiles[1], "50%"), "-=0.5")
			.add(() => moveMarkerTo(stopTiles[2], "75%"), "+=0.3")
			.add(() => moveMarkerTo(finalCenterStop, `<img src="${logoSrc}" alt="Logo" class="w-full h-full object-contain" />`), "+=0.3");

		// 4. SWAP CONTENT HERE: Trigger state change while screen is completely covered
		tl.add(() => {
			if (onBeforeCollapse) onBeforeCollapse();
		}, "+=0.2");

		// 5. Fade dark overlay layer
		tl.to(bgLayerRef.current, { opacity: 0, duration: 0.2 });

		// 6. Collapse grid tiles vertically to reveal Hero underneath
		const tilesToCollapse = tiles.filter((t) => t !== finalCenterStop);
		tl.to(tilesToCollapse, {
			scaleY: 0,
			transformOrigin: "top center",
			duration: 0.5,
			stagger: { amount: 0.4, from: "random" },
			ease: "power2.inOut"
		});

		// 7. Collapse center logo block + marker together
		tl.to(
			[finalCenterStop, markerEl],
			{
				scaleY: 0,
				transformOrigin: "top center",
				duration: 0.3,
				ease: "power2.in"
			},
			"-=0.2"
		);

		return () => tl.kill();
	}, [onBeforeCollapse, onComplete, logoSrc, tileColor, delay]);

	return (
		<div ref={preloaderRef} className="fixed inset-0 z-50 flex items-center justify-center w-screen h-screen overflow-hidden pointer-events-none">
			<div ref={bgLayerRef} className="absolute inset-0 bg-[#EC407A]" />
			<div ref={gridRef} className="absolute flex flex-wrap items-center justify-center content-center" />
			<div ref={markerRef} className="absolute z-10 flex items-center justify-center bg-[#EC407A] text-white font-mono font-bold text-xs">
				<span ref={markerLabelRef} className="flex items-center justify-center w-full h-full">
					0%
				</span>
			</div>
		</div>
	);
}
