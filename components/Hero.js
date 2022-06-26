import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";

const Hero = () => {
  return (
    <section className="page-100 flex justify-center items-center">
      <div className="container text-center">
        <h1 className=" font-extrabold pb-4 ">
          Welcome To
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
        </div>
        <button className="btn bg-indigo-100">heelo</button>
      </div>
    </section>
  );
};

export default Hero;
