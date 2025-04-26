
import { lazy, Suspense } from 'react';
import Button from './Button'

const LazyVideo =(lazy(() => import("./LazyVideo")));

const Card = ({ src, title, description, titleButton, href }) => {

  return (
    <div className="relative size-full">

      <Suspense fallback={<div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="flex space-x-2">
                <div className="w-3 h-3 bg-gray-300 rounded-full animate-bounce" />
                <div className="w-3 h-3 bg-gray-300 rounded-full animate-bounce [animation-delay:-0.3s]" />
                <div className="w-3 h-3 bg-gray-300 rounded-full animate-bounce [animation-delay:-0.6s]" />
            </div>
          </div>}>
          <LazyVideo src={src} loop muted autoPlay playsInline  preload="none" className={"absolute left-0 top-0 size-full object-cover object-center"}/>
      </Suspense>

      <div className=" relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className=" bento-title special-font">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
          )}
        </div>
        {titleButton && href && (<Button
          title={titleButton}
          containerClass="!bg-yellow-300 flex-center gap-1"
          href={href}
        />)}
      </div>
    </div>
  );
}

export default Card