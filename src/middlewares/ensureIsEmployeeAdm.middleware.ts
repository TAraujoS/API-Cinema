import { Request, Response, NextFunction } from "express";

const ensureIsEmployeeAdmMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.user.isEmployee) {
    res.status(403).json({
      message: "User is not employee",
    });
  } else if (!req.user.isAdm) {
    res.status(403).json({
      message: "User is not adm",
    });
  }

  return next();
};

export default ensureIsEmployeeAdmMiddleware;
