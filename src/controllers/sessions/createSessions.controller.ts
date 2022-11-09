import { Request, Response } from "express";
import createSessionService from "../../services/sessions/createSessions.services";

const createSessionController = async (req: Request, res: Response) => {
  const session = req.body;

  const newSession = await createSessionService(session);

  return res.status(201).json(newSession);
};

export default createSessionController;
