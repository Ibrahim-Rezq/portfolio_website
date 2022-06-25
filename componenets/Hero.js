import { useEffect, useState, useRef } from "react";
import styles from "../styles/Hero.module.css";
import { gsap } from "gsap";

const Hero = () => {
  // const arr = ["hello", "help ", "ashdjsda"];
  // const [curr, setCurr] = useState(0);
  // const [currWord, setCurrWord] = useState(arr[0]);
  // const changeWords = () => {
  //   let total = curr + 1;
  //   if (total > arr.length - 1) total = 0;
  //   setCurrWord(arr[total]);
  //   setCurr(total);
  // };
  // useEffect(() => {
  //   let interval;
  //   interval = setInterval(changeWords, 200);
  //   return clearInterval(interval);
  // }, []);

  return (
    <section className={`${styles.main} page-100`}>
      <div className="container d-f-c">
        <h1>
          Welcome To
          <br />
          <span>GameDevبالعربى</span>
        </h1>
        <div className={styles.text}>
          <h4>
            wHERE I LIKE TO MAKE THINGS <strong>EASY AND FUN </strong>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Perspiciatis, dolor. Quaerat repudiandae ullam error libero
            obcaecati nemo tempore blanditiis necessitatibus commodi aliquid
            tempora, odio saepe fugit quisquam laudantium! Nihil, incidunt!
          </h4>
        </div>
      </div>
    </section>
  );
};

export default Hero;
