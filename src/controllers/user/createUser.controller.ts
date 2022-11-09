import { Request, Response } from "express";
import { IUserRequest } from "../../interfaces/user";
import createUserService from "../../services/user/createUser.services";
import { instanceToPlain } from "class-transformer";

const createUserController = async (req: Request, res: Response) => {
  const user: IUserRequest = req.body;

  const createdUser = await createUserService(user);

  return res.status(201).json(instanceToPlain(createdUser));
};

export default createUserController;
