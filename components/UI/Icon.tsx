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
  SiLinkedin,
  SiYoutube,
  SiTwitter,
  SiInstagram,
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
  "Linkedin",
  "Youtube",
  "Twitter",
  "Instagram",
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
    const textColor = Icons[iconName].color
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
  Hash: { Icon: <BsHash />, color: "text-teal-500" },
  Html: { Icon: <SiHtml5 />, color: "text-orange-500" },
  Css: { Icon: <SiCss3 />, color: "text-sky-500" },
  JavaScript: { Icon: <SiJavascript />, color: "text-yellow-500" },
  TypeScript: { Icon: <SiTypescript />, color: "text-blue-500" },
  React: { Icon: <SiReact />, color: "text-blue-700" },
  Next: { Icon: <SiNextdotjs />, color: "text-slate-800" },
  Styled: { Icon: <SiStyledcomponents />, color: "text-pink-500" },
  Netlify: { Icon: <SiNetlify />, color: "text-green-500" },
  Tailwind: { Icon: <SiTailwindcss />, color: "text-teal-500" },
  Node: { Icon: <SiNodedotjs />, color: "text-green-600" },
  Express: { Icon: <SiExpress />, color: "text-slate-800" },
  GitHub: { Icon: <SiGithub />, color: "text-slate-500" },
  Linkedin: { Icon: <SiLinkedin />, color: "hover:text-blue-500" },
  Youtube: { Icon: <SiYoutube />, color: "hover:text-red-500" },
  Twitter: { Icon: <SiTwitter />, color: "hover:text-blue-500" },
  Instagram: { Icon: <SiInstagram />, color: "hover:text-pink-500" },
}
