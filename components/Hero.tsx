import { Container } from "./UI/Container"
import { FaReact } from "react-icons/fa"
import { SiExpress, SiNodedotjs, SiReact, SiNextdotjs } from "react-icons/si"
const Hero = () => {
  return (
    <section className="flex flex-col justify-center items-center min-h-page bg-slate-100">
      <Container center padding={4} classes="flex justify-center items-center">
        <div className="text-center lg:text-start">
          <h1 className="font-extrabold text-6xl ">Ibrahim Rezq</h1>
          <h1 className="font-extrabold pb-4 text-4xl">
            <br />
            <span className="">React Developer</span>
            <br /> Building Amazing Web Apps
          </h1>
          <div className="max-w-2xl pt-10 m-auto text-xl ">
            <p>
              Making Amazing web apps using React{" "}
              <SiReact className="inline text-blue-700 text-2xl animate-spin-slow" />{" "}
              for Frontend <br /> and Node.js{" "}
              <SiNodedotjs className="inline text-green-700 text-2xl" /> with
              Express <SiExpress className="inline text-slate-800 text-2xl" />{" "}
              for Backend <br />
              Or Next.js{" "}
              <SiNextdotjs className="inline text-slate-800 text-2xl" /> for a
              FullStack solution
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Hero
