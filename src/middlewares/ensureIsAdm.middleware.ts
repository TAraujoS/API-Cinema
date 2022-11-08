import { Request, Response, NextFunction } from "express";

const ensureIsAdmMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.user.isAdm) {
    res.status(401).json({
      message: "User is not adm",
    });
  }

  return next();
};

export default ensureIsAdmMiddleware;
