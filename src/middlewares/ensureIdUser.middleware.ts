import { Request, Response, NextFunction } from "express";

const ensureIdUserMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const key = Object.keys(req.body);

  if (
    key[0] === "id" ||
    key[0] === "isAdm" ||
    key[0] === "isEmployee" ||
    key[0] === "isActive"
  ) {
    return res.status(401).json({
      message: "No authorization",
    });
  }

  return next();
};

export default ensureIdUserMiddleware;
