import nodemailer from "nodemailer"
const { MAIL_PASS, MAIL } = process.env

async function main() {
  var smtpTransport = nodemailer.createTransport(
    `smtps://${MAIL}:` +
      encodeURIComponent(`${MAIL_PASS}`) +
      "@smtp.gmail.com:465"
  )

  let info = await smtpTransport.sendMail({
    from: '"Fred Foo 👻" <ovic391@gmail.com>',
    to: "ovic391@gmail.com",
    subject: "Hello ✔",
    text: "Hello world?",
    html: "<b>Hello world?</b>",
  })

  console.log("Message sent: %s", info.messageId)

  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info))
}

main().catch(console.error)

import type { NextApiRequest, NextApiResponse } from "next"

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({})
}
export default handler
