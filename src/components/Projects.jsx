import React from "react";
import Card from "./Card";
import AnimatedTitle from "./AnimatedTitle";
import Tilt from "./Tilt";

const Projects = () => {
  return (
    <section id="projects" className="bg-black pb-52">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <AnimatedTitle title="Projects" />
          <AnimatedTitle title="---" className/>
        </div>
        
        <div className="px-5 py-10">
          <AnimatedTitle
            title="3d animations"
            containerClass="mt-5 !text-yellow-300 text-center !text-6xl"
          />
          <AnimatedTitle
            title="Visuals"
            containerClass="mt-5 !text-yellow-300 text-center !text-6xl"
          />
        </div>
        <Tilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh] ">
          <Card
            src="videos/feature-1.mp4"
            title={<>"dialleima"</>}
            description={
              <>
                3D animated music video for the artist "Agrimi". showcasing a
                dynamic blend of visuals and music.
              </>
            }
            titleButton="Watch full video"
            href="https://www.youtube.com/watch?v=57m9Sb6Nk4M"
          />
        </Tilt>

        <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7">
          <Tilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
            <Card
              title={<>creatures</>}
              description={
                <>Creatures from my animated short film "Unusual Mind".</>
              }
              src="videos/feature-2.mp4"
            />
          </Tilt>
          <Tilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
            <Card title={<>flying mountains</>} src={"videos/feature-3.mp4"} />
          </Tilt>
          <Tilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
            <Card
              title={<>"go-ship"</>}
              description={
                <>3D animated music video for the artist "Silent".</>
              }
              src={"videos/feature-4.mp4"}
              titleButton="Watch full video"
              href="https://www.youtube.com/watch?v=kZOZSruDpRw"
            />
          </Tilt>

          {/* Double small cards */}

          <Tilt className="bento-tilt_2">
            <video
              src="videos/feature-5.mp4"
              loop
              muted
              autoPlay
              className="size-full object-cover object-center"
            />
          </Tilt>
          <Tilt className="bento-tilt_2">
            <video
              src="videos/feature-6.mp4"
              loop
              muted
              autoPlay
              className="size-full object-cover object-center"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default Projects;
