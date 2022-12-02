import React, { ReactNode } from "react"

type Props = {
  children?: ReactNode
  center: boolean
  padding: number
  classes: string
}

export function Container(props: Props) {
  const { children, center, classes } = props
  return (
    <section className={`container ${center ? "mx-auto " : ""} p-4 ${classes}`}>
      {children}
    </section>
  )
}

Container.defaultProps = {
  center: false,
  padding: 0,
  classes: "",
}
