
import Button from './Button'



const Card = ({ src, title, description, titleButton, href }) => {

  return (
    <div className="relative size-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        className=" absolute left-0 top-0 size-full object-cover object-center"
      />
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