import React from "react"
import { BsHash } from "react-icons/bs"
import {
  SiReact,
  SiNextdotjs,
  SiStyledcomponents,
  SiNetlify,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiGithub,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
} from "react-icons/si"

export type IconProps = {
  classes?: string
  iconName: IconNames
}

const iconNames = [
  "Hash",
  "Html",
  "Css",
  "JavaScript",
  "TypeScript",
  "React",
  "Next",
  "Styled",
  "Netlify",
  "Tailwind",
  "Node",
  "Express",
  "GitHub",
] as const

type IconNames = typeof iconNames[number]

function isIconName(maybeIconName: unknown): maybeIconName is IconNames {
  return (
    typeof maybeIconName === "string" &&
    iconNames.includes(maybeIconName as IconNames)
  )
}

const Icon = (props: IconProps) => {
  const { classes, iconName } = props
  if (isIconName(iconName)) {
    const textColor = `text-${Icons[iconName].color}-500`
    return React.cloneElement(Icons[iconName].Icon, {
      className: `${textColor} mr-1 ` + classes,
    })
  }
  return <></>
}

export default Icon

Icon.defaultProps = {
  classes: "",
  iconName: "Hash",
}

const Icons = {
  Hash: { Icon: <BsHash />, color: "teal" },
  Html: { Icon: <SiHtml5 />, color: "orange" },
  Css: { Icon: <SiCss3 />, color: "sky" },
  JavaScript: { Icon: <SiJavascript />, color: "yellow" },
  TypeScript: { Icon: <SiTypescript />, color: "blue" },
  React: { Icon: <SiReact />, color: "blue" },
  Next: { Icon: <SiNextdotjs />, color: "slate" },
  Styled: { Icon: <SiStyledcomponents />, color: "pink" },
  Netlify: { Icon: <SiNetlify />, color: "green" },
  Tailwind: { Icon: <SiTailwindcss />, color: "teal" },
  Node: { Icon: <SiNodedotjs />, color: "green" },
  Express: { Icon: <SiExpress />, color: "slate" },
  GitHub: { Icon: <SiGithub />, color: "slate" },
}
