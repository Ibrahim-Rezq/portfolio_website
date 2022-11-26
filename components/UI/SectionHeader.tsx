import React from "react"
type SectionHeaderProps = {
  title: string
}
const SectionHeader = ({ title }: SectionHeaderProps) => {
  return (
    <>
      <h2 className="text-3xl text-center font-bold">{title}</h2>
      <hr className="border-dotted border-b-4 border-teal-200 w-60 m-auto rounded-3xl" />
    </>
  )
}

export default SectionHeader
