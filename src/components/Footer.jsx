import React from 'react'

const Footer = () => {
  return (
    <footer className="w-screenpy-4 text-black">
      <div className=" container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className=" text-center text-sm mb-2 md:text-left">
          &copy; 2024 Savvas Ampatzidis
        </p>
      </div>
    </footer>
  );
}

export default Footer