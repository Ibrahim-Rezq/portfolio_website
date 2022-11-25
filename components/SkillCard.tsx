import React, { ReactNode, ReactElement } from "react"
import Icon from "./UI/Icon"
type SkillCardProps = {
  skill: {
    title: string
    iconName: string
  }
}

const SkillCard = ({ skill: { iconName, title } }: SkillCardProps) => {
  return (
    <article className="flex justify-center items-center my-10 flex-col">
      <span className="z-10">
        <Icon iconName={iconName as any} classes="text-3xl" />
      </span>
      <section className="px-6 py-4 max-w-xl text-center">
        <h4 className="text-2xl">{title}</h4>
      </section>
    </article>
  )
}

export default SkillCard

SkillCard.defaultProps = {
  title: "",
  iconName: "",
}
