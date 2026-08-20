import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = ["Home", "About", "Work", "Contact"];

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen((prev) => !prev);
	};

	return (
		<div className="fixed top-0 left-0 right-0 z-50 h-16 sm:px-6">
			<div className="relative flex h-full items-center justify-end px-4">
				{/* Desktop Navbar */}
				<header className="hidden md:flex items-center">
					<nav className="flex items-center space-x-6">
						{navItems.map((item) => (
							<a key={item} href={`#${item.toLowerCase()}`} className="nav-hover-btn">
								{item}
							</a>
						))}
					</nav>
				</header>

				{/* Mobile Burger Button */}
				<div className="md:hidden flex items-center">
					<button
						className="bg-gray-800 p-3 rounded-full flex flex-col justify-center items-center w-10 h-10 gap-1.5"
						onClick={toggleMenu}
						aria-label="Toggle Menu"
					>
						<motion.span animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }} className="w-5 h-0.5 bg-white block origin-center" />
						<motion.span animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }} className="w-5 h-0.5 bg-white block" />
						<motion.span animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }} className="w-5 h-0.5 bg-white block origin-center" />
					</button>
				</div>

				{/* Animated Mobile Dropdown Menu */}
				<AnimatePresence>
					{isMenuOpen && (
						<motion.div
							initial={{ opacity: 0, y: -10 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -10 }}
							transition={{ duration: 0.2 }}
							className="md:hidden absolute top-full right-4 w-48 bg-gray-800 text-white py-2 rounded-lg shadow-xl overflow-hidden"
						>
							{navItems.map((item, index) => (
								<a
									key={item}
									href={`#${item.toLowerCase()}`}
									className={`block px-4 py-2 hover:bg-gray-800 transition ${index !== navItems.length - 1 ? "border-b border-gray-800" : ""}`}
									onClick={() => setIsMenuOpen(false)}
								>
									{item}
								</a>
							))}
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</div>
	);
};

export default Navbar;
