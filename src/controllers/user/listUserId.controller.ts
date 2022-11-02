import { Request, Response } from "express";
import listUserIdService from "../../services/user/listUserId.services";

const listUserIdController = async (req: Request, res: Response)=>{
  const id = req.params.id

  const userId = await listUserIdService(id)

  return res.json(userId)
}

export default listUserIdController