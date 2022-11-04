import { Request, Response, NextFunction } from "express";

const ensureIsEmployeeMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.user.isEmployee) {
    return res.status(403).json({
      message: "User is not employee",
    });
  }

  return next();
};

export default ensureIsEmployeeMiddleware;
