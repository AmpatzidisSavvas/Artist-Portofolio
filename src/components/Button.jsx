import React from 'react'

const Button = ({ title, id, leftIcon, containerClass, onClick, href}) => {

  return (
    <button
      id={id}
      onClick={(e) => {
        e.preventDefault(); 
        if (href) {
          window.open(href, '_blank'); 
        }
        if (onClick) {
          onClick(e); 
        }
      }}
      className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black transition-transform duration-300 ease-in-out hover:scale-105 ${containerClass}`}
    >
      {leftIcon}
      <span className=' relative incline overflow-hidden font-general text-xs uppercase'>
        <div>{ title }</div>
      </span>
    </button>
  );
}

export default Button