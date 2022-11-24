import type { NextApiRequest, NextApiResponse } from "next"
import data from "../../../db.json"

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(data.Posts)
}
