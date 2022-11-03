import { Request, Response, NextFunction } from "express";

const ensureUpdateMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const idParams = req.params.id;
  if (idParams === req.user.id) {
    return next();
  }

  if (!req.user.isEmployee) {
    return res.status(401).json({
      message: "No authorization",
    });
  }

  if (!req.user.isAdm) {
    return res.status(401).json({
      message: "No authorization",
    });
  }

  return next();
};

export default ensureUpdateMiddleware;
