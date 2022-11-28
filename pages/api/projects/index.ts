import type { NextApiRequest, NextApiResponse } from "next"
import data from "../../../db.js"

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(data.Projects)
}
export default handler
