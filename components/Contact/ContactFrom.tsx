import React from "react"
import { Container } from "../UI/Container"
import SectionHeader from "../UI/SectionHeader"

type ContactFromProps = {}

const ContactFrom = (props: ContactFromProps) => {
  return (
    <Container center padding={4} classes="my-10">
      <SectionHeader title="Contact" />
    </Container>
  )
}

export default ContactFrom
