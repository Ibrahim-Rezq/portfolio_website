import React, { ReactNode } from "react"
import Icon from "./Icon"

type CardProps = {
  children?: ReactNode
  data: { title: string; iconName: string }
  size?: string
}

const Card = ({ children, data: { title, iconName }, size }: CardProps) => {
  const roomClass = `before:w-32 before:content-[attr(data-before)] before:absolute before:bottom-0 before:left-0 before:transition-all before:duration-500 before:h-32 before:top-[50%] before:left-[50%] before:-translate-x-1/2 before:translate-y-1/2 group-hover:before:-translate-y-4`

  return (
    <article className="group flex justify-center items-center flex-col  my-4">
      <span className={"z-10 "}>
        <Icon
          iconName={iconName as any}
          classes={"text-3xl group-hover:scale-150 duration-300 mr-0 " + size}
        />
      </span>
      <section
        data-before={title}
        className={
          "h-10 w-32 text-xl text-center before:z-20 mt-2 overflow-hidden relative " +
          roomClass
        }
      ></section>
    </article>
  )
}

export default Card
