import { Request, Response } from "express";
import { IUserLogin } from "../../interfaces/user/users.interface";
import loginUserService from "../../services/login/loginUser.services";

const loginUserController = async (req: Request, res: Response)=>{

  const data: IUserLogin = req.body
  const token = await loginUserService(data)
  return res.json(token)

}

export default loginUserController