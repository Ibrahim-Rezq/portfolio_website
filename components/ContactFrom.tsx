import Image from "next/image"
import React from "react"
import Button from "./UI/Button"
import { Container } from "./UI/Container"
import SectionHeader from "./UI/SectionHeader"
import ContactImage from "../assets/Contact-us.svg"

type ContactFromProps = {}
// dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:border-0 focus:outline-none dark:focus:border-0 focus:border-b-2lue-500
const ContactFrom = (props: ContactFromProps) => {
  const handleSendMail = (e: any) => {
    e.preventDefault()
    fetch("/api/sendContactMail")
  }

  return (
    <section className="bg-slate-100">
      <Container center padding={4} classes="pt-10">
        <SectionHeader title="Contact" />
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="text-center md:text-start mt-6">
            <h2 className="text-4xl font-bold mb-8">Get in touch</h2>
            <p className="text-xl max-w-lg text-center md:text-start m-auto">
              If you wanna get in touch, talk to me about a project
              collaboration or just say hi, fill up the awesome form or send an
              email to ovic391@gmail.com and ~let`&apos;`s talk.
            </p>
            <Image src={ContactImage} alt={"Contact Me "} />
          </div>
          <form className="py-6 my-4 px-8 m-auto w-full min-w-[24rem] max-w-2xl">
            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <Input
                id={"username"}
                placeholder={"Ibrahim Rezq"}
                lable={"Username"}
                type={"text"}
              />
              <Input
                id={"email"}
                placeholder={"example@email.com"}
                lable={"E-mail"}
                type={"email"}
              />
            </div>
            <div className="mb-6">
              <Input
                id={"subject"}
                placeholder={"Subject"}
                lable={"Subject"}
                type={"text"}
              />
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 mt-8"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows={4}
                className="bg-gray-50 border-b-2 border-gray-300 text-gray-900 text-sm rounded-0  block w-full p-2.5 focus:border-b-2 focus:border-gray-300 focus:outline-0 "
                placeholder="Write your thoughts here..."
              />
            </div>
            <div className="flex items-start mb-6">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border-b-2 border-gray-300 rounded bg-gray-50  focus:ring-3 focus:border-0  dark:bg-gray-700 dark:border-gray-600 dark:focus:border-0 focus:ring-blue-600 dark:ring-offset-gray-800"
                  required
                />
              </div>
              <label
                htmlFor="remember"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Subscribe to{" "}
                <span className="text-blue-600 hover:underline dark:text-blue-500">
                  NewsLetter.
                </span>
              </label>
            </div>
            <Button
              type="submit"
              classes="w-full hover:before:w-96  hover:before:h-96"
              onClick={handleSendMail}
            >
              Submit
            </Button>
          </form>
        </div>
      </Container>
    </section>
  )
}
export default ContactFrom

type InputProps = {
  id: string
  placeholder: string
  lable: string
  type: string
}

const Input = ({ id, placeholder, lable, type }: InputProps) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900 "
      >
        {lable}
      </label>
      <input
        type={type}
        id={id}
        className="bg-gray-50 border-b-2 border-gray-300 text-gray-900 text-sm rounded-0  block w-full p-2.5 focus:border-b-2 focus:border-gray-300 focus:outline-0"
        placeholder={placeholder}
        required
      />
    </div>
  )
}
