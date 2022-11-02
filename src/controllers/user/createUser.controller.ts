import { Request, Response } from "express";
import { IUserRequest } from "../../interfaces/user/users.interface";
import createUserService from "../../services/user/createUser.services";


const createUserController = async(req:Request, res: Response)=>{
  
    const user : IUserRequest = req.body
    const createdUser = await createUserService(user)
    return res.status(201).json(createdUser)
   

}

export default createUserController