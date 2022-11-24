import React, { ReactNode } from "react"

type Props = {
  children?: ReactNode
  center: boolean
  padding: number
  classes: string
}

export function Container(props: Props) {
  const { children, center, padding, classes } = props
  let p = 2
  if (padding > 0 && padding <= 10) {
    p = padding
  }
  return (
    <section
      className={`container ${center ? "mx-auto " : ""}p-${p} py-0 ${classes}`}
    >
      {children}
    </section>
  )
}

Container.defaultProps = {
  center: false,
  padding: 0,
  classes: "",
}
