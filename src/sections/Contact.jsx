import AnimatedTitle from "../components/shared/AnimatedTitle";
import Button from "../components/ui/Button";
import { FaVimeo } from "react-icons/fa";
import { PiFacebookLogo, PiInstagramLogo, PiLinkedinLogo } from "react-icons/pi";
import ContactForm from "../components/shared/ContactForm";
import { motion } from "framer-motion";

const Contact = () => {
	return (
		<div id="contact" className=" min-h-96 w-screen">
			<div className="relative bg-black py-24 text-blue-50 sm:overflow-hidden">
				<div className="flex flex-col items-center text-center">
					<div className="mb-5">
						<motion.img
							src="img/flowerIcon.webp"
							alt="Flower icon"
							className="w-[160px] h-[160px] object-contain"
							initial={{ opacity: 0, y: 30, scale: 0.9 }}
							whileInView={{ opacity: 1, y: 0, scale: 1.1 }}
							viewport={{ once: true, amount: 0.2 }}
							transition={{ duration: 1.5, ease: [0.21, 0.47, 0.32, 0.98] }}
						/>
					</div>
					<div className="mb-10 w-full">
						<AnimatedTitle title="Contact" className="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !font-black !leading-[.9]" />
					</div>

					<div className="flex w-full max-w-xl flex-col items-center gap-6 px-4">
						<div className="grid w-full grid-cols-2 gap-3 md:gap-4">
							<Button
								id="watch-instagram"
								title="Instagram"
								leftIcon={<PiInstagramLogo />}
								href="https://www.instagram.com/thepack_art_/"
								containerClass="!bg-yellow-300 flex-center gap-1 w-full sm:w-auto"
							/>

							<Button
								id="watch-facebook"
								title="Facebook"
								leftIcon={<PiFacebookLogo />}
								href="https://www.facebook.com/ThePackArte/"
								containerClass="!bg-yellow-300 flex-center gap-1 w-full sm:w-auto"
							/>
							<Button
								id="watch-linkedin"
								title="Linkedln"
								leftIcon={<PiLinkedinLogo />}
								href="https://www.linkedin.com/in/savvas-ampatzidis/"
								containerClass="!bg-yellow-300 flex-center gap-1 w-full sm:w-auto"
							/>
							<Button
								id="watch-vimeo"
								title="Vimeo"
								leftIcon={<FaVimeo />}
								href="https://vimeo.com/user85100118"
								containerClass="!bg-yellow-300 flex-center gap-1 w-full sm:w-auto"
							/>
						</div>
						<div className="w-full">
							<ContactForm />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
