import { Request, Response, NextFunction } from "express";

const ensureIsEmployeeAdmMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.user.isEmployee) {
    return res.status(403).json({
      message: "User is not employee",
    });
  } else if (!req.user.isAdm) {
    return res.status(403).json({
      message: "User is not adm",
    });
  }

  return next();
};

export default ensureIsEmployeeAdmMiddleware;
