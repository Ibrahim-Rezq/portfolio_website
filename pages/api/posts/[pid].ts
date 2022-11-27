import type { NextApiRequest, NextApiResponse } from "next"
import data from "../../../db.json"

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const { pid } = req.query
  if (pid) res.status(200).json({ ...data.Posts.find((el) => el.id === +pid) })
}
export default handler
