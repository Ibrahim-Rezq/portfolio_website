import React, { ReactNode, ReactElement } from "react"

type ButtonProps = {
  children?: ReactNode
  iconLeft: ReactElement<any>
  iconRight: ReactElement<any>
  animateIcon?: boolean
}

const Button = ({
  children,
  iconLeft,
  iconRight,
  animateIcon,
}: ButtonProps) => {
  const roomClass = `before:w-32 before:absolute before:bottom-0 before:left-0 before:bg-teal-800 before:transition-all before:duration-500 before:h-0 hover:before:h-32 before:scale-150 before:rotate-45 before:translate-x-[-50%] before:translate-y-[-50%] before:top-[50%] before:left-[50%]`
  const animateClass = `inline w-0 group-hover:w-8 ml-1 duration-300 text-teal-700 group-hover:text-teal-100`
  return (
    <button
      className={
        "relative group border border-teal-700 duration-300 py-2 px-4 text-teal-700 overflow-hidden " +
        roomClass
      }
    >
      <span className="w-full h-full">
        {React.cloneElement(iconLeft, {
          className: animateIcon ? animateClass : "inline ml-1",
        })}
        {children}
        {React.cloneElement(iconRight, {
          className: animateIcon ? animateClass : "inline ml-1",
        })}
      </span>
      <span className="icon-text h-[calc(100% - 6px)] w-full text-teal-700 group-hover:text-teal-100">
        {React.cloneElement(iconLeft, {
          className: animateIcon ? animateClass : "inline ml-1",
        })}
        {children}
        {React.cloneElement(iconRight, {
          className: animateIcon ? animateClass : "inline ml-1",
        })}
      </span>
    </button>
  )
}
Button.defaultProps = {
  iconLeft: <></>,
  iconRight: <></>,
  animateIcon: true,
}
export default Button
