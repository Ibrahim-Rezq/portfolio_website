import Image from "next/image"
import Link from "next/link"
import React from "react"
import { SEOHead } from "../../components/Global/SEOHead"
import Button from "../../components/UI/Button"
import Card from "../../components/UI/Card"
import { Container } from "../../components/UI/Container"
import SectionHeader from "../../components/UI/SectionHeader"
import { BsDownload } from "react-icons/bs"

const About = () => {
  const socials = [
    {
      title: "Linkedin",
      iconName: "Linkedin",
      link: "https://www.linkedin.com/in/ibrahim-rezq/",
    },
    {
      title: "GitHub",
      iconName: "GitHub",
      link: "https://github.com/Ibrahim-Rezq",
    },
    { title: "Youtube", iconName: "Youtube", link: "" },
    { title: "Twitter", iconName: "Twitter", link: "" },
    { title: "Instagram", iconName: "Instagram", link: "" },
  ]

  return (
    <div className="min-h-cont py-4">
      <SEOHead title={"About"} />
      <Container center classes="py-8">
        <SectionHeader title="About Me" />
        <section className="flex justify-center items-center my-8 text-center md:text-start flex-col-reverse md:flex-row">
          <p className="p-8 max-w-xl text-lg font-semibold">
            Ibrahim Rezq is a 22 years old Web developer by day Game Developer
            By night. <br />
            Self-Taught Developer From the start to the end started with Youtube
            tutorials progressed to Udemy and Udacity and fell in love with the
            Docs of the internet. <br /> Born and raised in Egypt.
            <span className="block mt-4">
              <Button iconRight={<BsDownload />}>Download Resume</Button>
            </span>
          </p>
          <Image src="/3bg.png" width="300" height="85" alt="12121" />
        </section>
        <ul className="grid grid-cols-3 md:grid-cols-5  gap-4 place-items-center my-10 ">
          {socials.map((item: any) => {
            return (
              <li key={item.title} className="group text-slate-600">
                <Link href={item.link}>
                  <Card data={item} size="text-2xl" />
                </Link>
              </li>
            )
          })}
        </ul>
      </Container>
    </div>
  )
}

export default About
