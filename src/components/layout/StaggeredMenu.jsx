import React, { useCallback, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { gsap } from "gsap";
import { PiFacebookLogo, PiInstagramLogo, PiLinkedinLogo } from "react-icons/pi";

export const StaggeredMenu = ({
	position = "right",
	colors = ["#EC407A"],
	items = [
		{ label: "Home", ariaLabel: "Go to home page", link: "/#home" },
		{ label: "About", ariaLabel: "Learn about us", link: "/#about" },
		{ label: "Work", ariaLabel: "View our services", link: "/#work" },
		{ label: "Contact", ariaLabel: "Get in touch", link: "/#contact" }
	],
	socialItems = [
		{ link: "https://www.instagram.com/thepack_art_/", icon: <PiInstagramLogo /> },
		{ link: "https://www.facebook.com/ThePackArte/", icon: <PiFacebookLogo /> },
		{ link: "https://www.linkedin.com/in/savvas-ampatzidis/", icon: <PiLinkedinLogo /> }
	],
	displaySocials = true,
	displayItemNumbering = false,
	className,
	menuButtonColor = "#fff",
	openMenuButtonColor = "#000",
	changeMenuColorOnOpen = true,
	accentColor = "#EC407A",
	closeOnClickAway = true,
	closeOnScroll = true, // Enabled auto-close on scroll by default
	onMenuOpen,
	onMenuClose
}) => {
	const [open, setOpen] = useState(false);
	const [mounted, setMounted] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const openRef = useRef(false);

	const panelRef = useRef(null);
	const preLayersRef = useRef(null);
	const plusHRef = useRef(null);
	const plusVRef = useRef(null);
	const iconRef = useRef(null);
	const textInnerRef = useRef(null);
	const toggleBtnRef = useRef(null);

	const masterTlRef = useRef(null);
	const busyRef = useRef(false);

	React.useEffect(() => {
		setMounted(true);

		const handleScrollState = () => {
			if (window.scrollY > 20) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScrollState, { passive: true });
		return () => window.removeEventListener("scroll", handleScrollState);
	}, []);

	useLayoutEffect(() => {
		if (!mounted) return;

		const ctx = gsap.context(() => {
			const panel = panelRef.current;
			const preContainer = preLayersRef.current;
			const plusH = plusHRef.current;
			const plusV = plusVRef.current;
			const icon = iconRef.current;
			const textInner = textInnerRef.current;

			if (!panel || !plusH || !plusV || !icon || !textInner) return;

			const preLayers = preContainer ? Array.from(preContainer.querySelectorAll(".sm-prelayer")) : [];
			const offscreen = position === "left" ? -100 : 100;

			gsap.set([panel, ...preLayers], { xPercent: offscreen, opacity: 1, force3D: true });
			gsap.set(plusH, { transformOrigin: "50% 50%", rotate: 0, force3D: true });
			gsap.set(plusV, { transformOrigin: "50% 50%", rotate: 90, force3D: true });
			gsap.set(icon, { rotate: 0, transformOrigin: "50% 50%", force3D: true });
			gsap.set(textInner, { yPercent: 0 });

			if (toggleBtnRef.current) gsap.set(toggleBtnRef.current, { color: menuButtonColor });
		});

		return () => ctx.revert();
	}, [mounted, menuButtonColor, position]);

	const buildMasterTimeline = useCallback(() => {
		const panel = panelRef.current;
		const preContainer = preLayersRef.current;

		if (!panel) return null;

		const layers = preContainer ? Array.from(preContainer.querySelectorAll(".sm-prelayer")) : [];
		const itemEls = Array.from(panel.querySelectorAll(".sm-panel-itemLabel"));
		const numberEls = Array.from(panel.querySelectorAll(".sm-panel-list[data-numbering] .sm-panel-item"));
		const socialTitle = panel.querySelector(".sm-socials-title");
		const socialLinks = Array.from(panel.querySelectorAll(".sm-socials-link"));

		const offscreen = position === "left" ? -100 : 100;

		gsap.set(itemEls, { yPercent: 140, rotate: 10, force3D: true });
		if (numberEls.length) gsap.set(numberEls, { ["--sm-num-opacity"]: 0 });
		if (socialTitle) gsap.set(socialTitle, { opacity: 0 });
		if (socialLinks.length) gsap.set(socialLinks, { y: 25, opacity: 0 });

		const tl = gsap.timeline({
			paused: true,
			onComplete: () => {
				busyRef.current = false;
			},
			onReverseComplete: () => {
				busyRef.current = false;
			}
		});

		layers.forEach((el, i) => {
			tl.fromTo(el, { xPercent: offscreen }, { xPercent: 0, duration: 0.45, ease: "power4.out" }, i * 0.05);
		});

		const panelInsertTime = layers.length ? (layers.length - 1) * 0.05 + 0.06 : 0;

		tl.fromTo(panel, { xPercent: offscreen }, { xPercent: 0, duration: 0.55, ease: "power4.out" }, panelInsertTime);

		if (itemEls.length) {
			const itemsStart = panelInsertTime + 0.1;
			tl.to(itemEls, { yPercent: 0, rotate: 0, duration: 0.75, ease: "power4.out", stagger: 0.06 }, itemsStart);
			if (numberEls.length) {
				tl.to(numberEls, { duration: 0.4, ease: "power2.out", ["--sm-num-opacity"]: 1, stagger: 0.05 }, itemsStart + 0.1);
			}
		}

		if (socialTitle || socialLinks.length) {
			const socialsStart = panelInsertTime + 0.25;
			if (socialTitle) tl.to(socialTitle, { opacity: 1, duration: 0.4 }, socialsStart);
			if (socialLinks.length) {
				tl.to(socialLinks, { y: 0, opacity: 1, duration: 0.45, ease: "power3.out", stagger: 0.05 }, socialsStart + 0.02);
			}
		}

		tl.to(plusHRef.current, { rotate: 45, duration: 0.4, ease: "power3.out" }, 0);
		tl.to(plusVRef.current, { rotate: -45, duration: 0.4, ease: "power3.out" }, 0);

		if (textInnerRef.current) {
			tl.to(textInnerRef.current, { yPercent: -50, duration: 0.4, ease: "power3.out" }, 0);
		}

		if (changeMenuColorOnOpen && toggleBtnRef.current) {
			tl.to(toggleBtnRef.current, { color: openMenuButtonColor, duration: 0.3 }, 0.1);
		}

		return tl;
	}, [position, changeMenuColorOnOpen, openMenuButtonColor]);

	const toggleMenu = useCallback(() => {
		if (busyRef.current) return;
		busyRef.current = true;

		const nextState = !openRef.current;
		openRef.current = nextState;
		setOpen(nextState);

		if (!masterTlRef.current) {
			masterTlRef.current = buildMasterTimeline();
		}

		if (nextState) {
			onMenuOpen?.();
			masterTlRef.current.play(0);
		} else {
			onMenuClose?.();
			masterTlRef.current.reverse();
		}
	}, [buildMasterTimeline, onMenuOpen, onMenuClose]);

	const closeMenu = useCallback(() => {
		if (openRef.current && masterTlRef.current && !busyRef.current) {
			busyRef.current = true;
			openRef.current = false;
			setOpen(false);
			onMenuClose?.();
			masterTlRef.current.reverse();
		}
	}, [onMenuClose]);

	React.useEffect(() => {
		if (!closeOnClickAway || !open) return;

		const handleClickOutside = (event) => {
			if (panelRef.current && !panelRef.current.contains(event.target) && toggleBtnRef.current && !toggleBtnRef.current.contains(event.target)) {
				closeMenu();
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, [closeOnClickAway, open, closeMenu]);

	// Auto-close menu on page scroll
	React.useEffect(() => {
		if (!closeOnScroll || !open) return;

		const handleScroll = () => {
			closeMenu();
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, [closeOnScroll, open, closeMenu]);

	if (!mounted) return null;

	return createPortal(
		<div className="sm-scope">
			<div
				className={(className ? className + " " : "") + "staggered-menu-wrapper"}
				style={accentColor ? { ["--sm-accent"]: accentColor } : undefined}
				data-position={position}
				data-open={open || undefined}
			>
				{/* STICKY HEADER ALIGNED TO THE RIGHT */}
				<header className="staggered-menu-header !fixed !top-0 !right-0 flex items-center justify-end px-8 py-6 pointer-events-none z-[9999]">
					<button
						ref={toggleBtnRef}
						className={`sm-toggle relative inline-flex items-center gap-[0.4rem] border-0 cursor-pointer text-[#e9e9ef] font-medium leading-none pointer-events-auto transition-all duration-300 ${
							scrolled ? "bg-[#EC407A]  px-5 py-3 rounded-lg" : "bg-transparent p-0"
						}`}
						aria-label={open ? "Close menu" : "Open menu"}
						aria-expanded={open}
						aria-controls="staggered-menu-panel"
						onClick={toggleMenu}
						type="button"
					>
						<span className="sm-toggle-textWrap relative inline-block h-[1em] overflow-hidden whitespace-nowrap" aria-hidden="true">
							<span ref={textInnerRef} className="sm-toggle-textInner flex flex-col leading-none">
								<span className="sm-toggle-line block h-[1em] leading-none">Menu</span>
								<span className="sm-toggle-line block h-[1em] leading-none">Close</span>
							</span>
						</span>

						<span
							ref={iconRef}
							className="sm-icon relative w-[14px] h-[14px] shrink-0 inline-flex items-center justify-center [will-change:transform]"
							aria-hidden="true"
						>
							<span
								ref={plusHRef}
								className="sm-icon-line absolute left-1/2 top-1/2 w-full h-[2px] bg-current rounded-[2px] -translate-x-1/2 -translate-y-1/2 [will-change:transform]"
							/>
							<span
								ref={plusVRef}
								className="sm-icon-line absolute left-1/2 top-1/2 w-full h-[2px] bg-current rounded-[2px] -translate-x-1/2 -translate-y-1/2 [will-change:transform]"
							/>
						</span>
					</button>
				</header>

				<div ref={preLayersRef} className="sm-prelayers !fixed !top-0 !right-0 !bottom-0 h-screen pointer-events-none z-[9997]" aria-hidden="true">
					{(() => {
						const raw = colors && colors.length ? colors.slice(0, 4) : ["#1e1e22", "#35353c"];
						let arr = [...raw];
						if (arr.length >= 3) {
							arr.splice(Math.floor(arr.length / 2), 1);
						}
						return arr.map((c, i) => (
							<div key={`prelayer-${i}`} className="sm-prelayer absolute top-0 right-0 h-full w-full [will-change:transform]" style={{ background: c }} />
						));
					})()}
				</div>

				<aside
					id="staggered-menu-panel"
					ref={panelRef}
					className="staggered-menu-panel !fixed !top-0 !right-0 h-screen bg-[#DFDFF0] flex flex-col p-[6em_2em_2em_2em] overflow-y-auto z-[9998] pointer-events-auto [will-change:transform]"
					aria-hidden={!open}
				>
					<div className="sm-panel-inner flex-1 flex flex-col gap-3">
						<ul className="sm-panel-list list-none m-0 p-0 flex flex-col gap-2" role="list" data-numbering={displayItemNumbering || undefined}>
							{items && items.length
								? items.map((it, idx) => (
										<li className="sm-panel-itemWrap relative overflow-hidden leading-none" key={it.link || it.label || `item-${idx}`}>
											<a
												className="sm-panel-item relative text-black font-semibold text-[4rem] cursor-pointer leading-none tracking-[-2px] uppercase transition-[color] duration-150 ease-linear inline-block no-underline pr-[1.4em]"
												href={it.link}
												aria-label={it.ariaLabel}
												onClick={closeMenu}
											>
												<span className="sm-panel-itemLabel inline-block [transform-origin:50%_100%] [will-change:transform]">{it.label}</span>
											</a>
										</li>
									))
								: null}
						</ul>

						{displaySocials && socialItems && socialItems.length > 0 && (
							<div className="sm-socials mt-auto pt-8 flex flex-col gap-3" aria-label="Social links">
								<ul className="sm-socials-list list-none m-0 p-0 flex flex-row items-center gap-12 flex-wrap" role="list">
									{socialItems.map((s, i) => (
										<li key={s.link || `social-${i}`} className="sm-socials-item">
											<a
												href={s.link}
												target="_blank"
												rel="noopener noreferrer"
												className="group sm-socials-link text-[1.1rem] font-medium text-[#111] no-underline relative inline-flex items-center gap-1.5 py-[2px]"
											>
												{s.icon ? (
													<span
														className="sm-socials-icon inline-flex text-[1.8em] leading-none shrink-0 transition-transform duration-200 group-hover:scale-125"
														aria-hidden="true"
													>
														{s.icon}
													</span>
												) : null}
												{s.label && <span>{s.label}</span>}
											</a>
										</li>
									))}
								</ul>
							</div>
						)}
					</div>
				</aside>
			</div>

			<style>{`
.sm-scope .staggered-menu-wrapper { pointer-events: none; }
.sm-scope .staggered-menu-header { position: fixed !important; top: 0 !important; right: 0 !important; display: flex; align-items: center; justify-content: flex-end; z-index: 9999 !important; }
.sm-scope .sm-toggle { position: relative; display: inline-flex; align-items: center; cursor: pointer; color: #e9e9ef; font-weight: 500; line-height: 1; overflow: visible; }
.sm-scope .sm-toggle-textWrap { position: relative; margin-right: 0.5em; display: inline-block; height: 1em; overflow: hidden; white-space: nowrap; }
.sm-scope .sm-toggle-textInner { display: flex; flex-direction: column; line-height: 1; }
.sm-scope .sm-toggle-line { display: block; height: 1em; line-height: 1; }
.sm-scope .sm-icon { position: relative; width: 14px; height: 14px; flex: 0 0 14px; display: inline-flex; align-items: center; justify-content: center; }
.sm-scope .sm-icon-line { position: absolute; left: 50%; top: 50%; width: 100%; height: 2px; background: currentColor; border-radius: 2px; transform: translate(-50%, -50%); }
.sm-scope .staggered-menu-panel { position: fixed !important; top: 0 !important; right: 0 !important; width: clamp(260px, 38vw, 420px); height: 100vh; background: #DFDFF0; display: flex; flex-direction: column; padding: 6em 2em 2em 2em; overflow-y: auto; z-index: 9998 !important; }
.sm-scope [data-position='left'] .staggered-menu-panel { right: auto !important; left: 0 !important; }
.sm-scope .sm-prelayers { position: fixed !important; top: 0 !important; right: 0 !important; bottom: 0 !important; height: 100vh; width: clamp(260px, 38vw, 420px); pointer-events: none; z-index: 9997 !important; }
.sm-scope [data-position='left'] .sm-prelayers { right: auto !important; left: 0 !important; }
.sm-scope .sm-prelayer { position: absolute; top: 0; right: 0; height: 100%; width: 100%; }
.sm-scope .sm-panel-inner { flex: 1; display: flex; flex-direction: column; gap: 1.25rem; }
.sm-scope .sm-socials { margin-top: auto; padding-top: 2rem; display: flex; flex-direction: column; gap: 0.75rem; }
.sm-scope .sm-socials-title { margin: 0; font-size: 1rem; font-weight: 500; color: var(--sm-accent, #ff0000); }
.sm-scope .sm-socials-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: row; align-items: center; gap: 1rem; flex-wrap: wrap; }
.sm-scope .sm-socials-link { font-size: 1.2rem; font-weight: 500; color: #111; text-decoration: none; position: relative; padding: 2px 0; display: inline-block; transition: color 0.3s ease; }
.sm-scope .sm-socials-link:hover { color: var(--sm-accent, #ff0000); }
.sm-scope .sm-panel-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 0.5rem; }
.sm-scope .sm-panel-item { position: relative; color: #000; font-weight: 600; font-size: 4rem; cursor: pointer; line-height: 1; letter-spacing: -2px; text-transform: uppercase; transition: color 0.25s; display: inline-block; text-decoration: none; padding-right: 1.4em; }
.sm-scope .sm-panel-itemLabel { display: inline-block; transform-origin: 50% 100%; }
.sm-scope .sm-panel-item:hover { color: var(--sm-accent, #ff0000); }
.sm-scope .sm-panel-list[data-numbering] { counter-reset: smItem; }
.sm-scope .sm-panel-list[data-numbering] .sm-panel-item::after { counter-increment: smItem; content: counter(smItem, decimal-leading-zero); position: absolute; top: 0.1em; right: 3.2em; font-size: 18px; font-weight: 400; color: var(--sm-accent, #ff0000); opacity: var(--sm-num-opacity, 0); }
@media (max-width: 1024px) { .sm-scope .staggered-menu-panel, .sm-scope .sm-prelayers { width: 100%; left: 0; right: 0; } }
      `}</style>
		</div>,
		document.body
	);
};

export default StaggeredMenu;
