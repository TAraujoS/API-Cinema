import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import { IUserUpdate } from "../../interfaces/user";
import updateUserService from "../../services/user/updateUser.services";

const updateUserController = async (req: Request, res: Response) => {
  const user: IUserUpdate = req.body;

  const { id } = req.params;

  const updateUser = await updateUserService(user, id);

  return res.json(instanceToPlain(updateUser));
};

export default updateUserController;
