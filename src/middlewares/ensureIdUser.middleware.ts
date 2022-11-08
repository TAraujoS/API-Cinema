import { Request, Response, NextFunction } from "express";

const ensureIdUserMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const key = Object.keys(req.body);

  if (key[0] === "id" || key[0] === "isAdm" || key[0] === "isEmployee") {
    return res.status(401).json({
      message: "No authorization",
    });
  }

  const idParams = req.params.id;
  if (idParams === req.user.id) {
    return next();
  }
};

export default ensureIdUserMiddleware;
