import type { NextApiRequest, NextApiResponse } from "next"
import data from "../../../db.js"

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(data.Posts)
}
export default handler
