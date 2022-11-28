import type { NextApiRequest, NextApiResponse } from "next"
import data from "../../../db.js"

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const { pid } = req.query
  if (pid)
    res.status(200).json({ ...data.Projects.find((el) => el.id === +pid) })
}
export default handler
