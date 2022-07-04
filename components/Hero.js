import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="page-100 flex flex-col justify-center items-center overflow-hidden relative ">
      <div className="container flex text-center md:text-start justify-between items-center ">
        <div className="z-10">
          <h1 className=" font-extrabold pb-4 ">
            Welcome To
            <br className="hidden md:block" />
            <span> GameDevبالعربى</span>
          </h1>
          <div className="max-w-2xl pt-10 m-auto text-xl ">
            <p>
              WHERE I LIKE TO MAKE THINGS <strong>EASY AND FUN </strong>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Perspiciatis, dolor. Quaerat repudiandae ullam error libero
              obcaecati nemo tempore blanditiis necessitatibus commodi aliquid
              tempora, odio saepe fugit quisquam laudantium! Nihil, incidunt!
            </p>
            <button className="btn bg-indigo-100">heelo</button>
          </div>
        </div>
      </div>
      <span className="-rotate-12 absolute left-2/4 hidden md:block  img">
        <Image src="/Hinterrhein.svg" width={1600} height={1200} />
      </span>
    </section>
  );
};

export default Hero;
