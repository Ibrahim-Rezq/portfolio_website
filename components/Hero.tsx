import Image from "next/image"
import { Container } from "./UI/Container"
import Icon from "./UI/Icon"
import Button from "./UI/Button"
import Link from "next/link"
import { BsArrowRight, BsInfoCircle } from "react-icons/bs"
import HeroImage from "../assets/Hero.svg"

const Hero = () => {
  return (
    <section className="flex flex-col justify-center items-center min-h-page bg-slate-100">
      <Container center padding={4} classes="flex justify-center items-center">
        <div className="text-center lg:text-start">
          <h1 className="font-extrabold pb-4 text-4xl">
            <span className="font-extrabold text-6xl">Ibrahim Rezq</span>
            <br />
            <br />
            <span>React Developer</span>
            <br /> Building Amazing Web Apps
          </h1>
          <div className="max-w-2xl pt-10 m-auto text-xl mb-8">
            <p>
              Making Amazing web apps using React{" "}
              <Icon iconName={"React"} classes="inline text-2xl" />
              for Frontend <br /> and Node.js{" "}
              <Icon iconName={"Node"} classes="inline text-2xl" />
              with Express{" "}
              <Icon iconName={"Express"} classes="inline text-2xl" />
              for Backend <br />
              Or Next.js <Icon
                iconName={"Next"}
                classes="inline text-2xl"
              />{" "}
              for a FullStack solution
            </p>
          </div>
          <Link href="#Contact" className="mx-1">
            <Button iconRight={<BsArrowRight />}>Contact Me</Button>
          </Link>
          <Link href="/about" className="mx-1">
            <Button iconRight={<BsInfoCircle />}>About Me</Button>
          </Link>
        </div>
        <div className="w-[50%] hidden lg:block">
          <Image src={HeroImage} alt="developer working on laptop" />
        </div>
      </Container>
    </section>
  )
}

export default Hero
