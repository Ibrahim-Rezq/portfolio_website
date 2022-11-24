import type { NextApiRequest, NextApiResponse } from "next"
import data from "../../../db.json"

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { pid } = req.query
  if (pid)
    res.status(200).json({ ...data.Projects.find((el) => el.id === +pid) })
}
