import React, { useState } from 'react'
import AnimatedTitle from './AnimatedTitle'
import Button from './Button';
import { FaVimeo } from 'react-icons/fa';
import { PiFacebookLogo, PiInstagramLogo, PiLinkedinLogo } from 'react-icons/pi';
import { MdOutlineEmail } from "react-icons/md";

const ImageClipBox = ({ src, clipClass}) => (
  <div className={clipClass}>
    <img src={src} />
  </div>
);

const Contact = () => {

  const [isEmailDisplayed, setIsEmailDisplayed] = useState(false); 

  const handleClick = () => {
    setIsEmailDisplayed(!isEmailDisplayed); 
  };

  return (
    <div id="contact" className="my-20 min-h-96 w-screen  px-10">
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
          <ImageClipBox src="img/logo.webp" clipClass="absolute md:scale-110" />
        </div>

        <div className="flex flex-col items-center text-center">
          <p className="mb-10 font-general text-[10px] uppercase">----</p>

          <div className="mb-10">
            <AnimatedTitle
              title="Contact"
              className="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !font-black !leading-[.9]"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2 sm:justify-start sm:gap-4 lg:gap-6">
            <Button
              id="watch-trailer"
              title="Vimeo"
              leftIcon={<FaVimeo />}
              href="https://vimeo.com/user85100118"
              containerClass="!bg-yellow-300 flex-center gap-1"
            />
            <Button
              id="watch-trailer"
              title="Instagram"
              leftIcon={<PiInstagramLogo />}
              href="https://www.instagram.com/thepack_art_/"
              containerClass="!bg-yellow-300 flex-center gap-1"
            />
            <Button
              id="watch-trailer"
              title="Facebook"
              leftIcon={<PiFacebookLogo />}
              href="https://www.facebook.com/ThePackArte/"
              containerClass="!bg-yellow-300 flex-center gap-1"
            />
            <Button
              id="watch-trailer"
              title="Linkedln"
              leftIcon={<PiLinkedinLogo />}
              href="https://www.linkedin.com/in/savvas-ampatzidis/"
              containerClass="!bg-yellow-300 flex-center gap-1"
            />
            {/* <Button
              id="watch-trailer"
              title={isEmailDisplayed ? "savvas.ampa@gmail.com" : "Email"}
              leftIcon={<MdOutlineEmail />}
              onClick={handleClick}
              containerClass="!bg-yellow-300 flex-center gap-1"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};
  
export default Contact;