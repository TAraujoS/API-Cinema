import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entities";

export const ensureIsEmployeeMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({ id: req.user.id });

  if (!user.isEmployee) {
    return res.status(403).json({
      message: "User is not employee",
    });
  }

  return next();
};
