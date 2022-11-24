import React, { ReactNode } from "react"
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
} from "react-icons/si"

enum Variant {
  GRAY,
  RED,
  ORANGE,
  YELLOW,
  GREEN,
  TEAL,
  BLUE,
  INDIGO,
  PURPLE,
  PINK,
}
enum Icon {
  NONE,
  HASH,
  REACT,
  NEXT,
  STYLED,
  NETLIFY,
  TAILWIND,
  NODE,
  EXPRESS,
  GITHUB,
}

type Props = {
  variant: Variant
  children?: ReactNode
  icon: Icon
}

const VARIANT_MAPS: Record<Variant, string> = {
  [Variant.GRAY]: "bg-gray-100 text-gray-800",
  [Variant.RED]: "bg-red-100 text-red-800",
  [Variant.ORANGE]: "bg-orange-100 text-orange-800",
  [Variant.YELLOW]: "bg-yellow-100 text-yellow-800",
  [Variant.GREEN]: "bg-green-100 text-green-800",
  [Variant.TEAL]: "bg-teal-100 text-teal-800",
  [Variant.BLUE]: "bg-blue-100 text-blue-800",
  [Variant.INDIGO]: "bg-indigo-100 text-indigo-800",
  [Variant.PURPLE]: "bg-purple-100 text-purple-800",
  [Variant.PINK]: "bg-pink-100 text-pink-800",
}
const ICON_MAPS: Record<Icon, ReactNode> = {
  [Icon.NONE]: <></>,
  [Icon.HASH]: <BsHash className="text-teal-600 mr-1" />,
  [Icon.REACT]: <SiReact className="text-teal-600 mr-1" />,
  [Icon.NEXT]: <SiNextdotjs className="text-teal-600 mr-1" />,
  [Icon.STYLED]: <SiStyledcomponents className="text-teal-600 mr-1" />,
  [Icon.NETLIFY]: <SiNetlify className="text-teal-600 mr-1" />,
  [Icon.TAILWIND]: <SiTailwindcss className="text-teal-600 mr-1" />,
  [Icon.NODE]: <SiNodedotjs className="text-teal-600 mr-1" />,
  [Icon.EXPRESS]: <SiExpress className="text-teal-600 mr-1" />,
  [Icon.GITHUB]: <SiGithub className="text-teal-600 mr-1" />,
}

export function Badge(props: Props) {
  const { children, variant, icon } = props
  return (
    <span
      className={
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium leading-4 whitespace-no-wrap shadow-xl capitalize " +
        VARIANT_MAPS[variant]
      }
    >
      {ICON_MAPS[icon]} {children}
    </span>
  )
}

Badge.defaultProps = {
  variant: Variant.GRAY,
  icon: Icon.HASH,
}

Badge.variant = Variant
Badge.icon = Icon
