import { Request, Response } from "express";
import { Session } from "inspector";
import { createSessionService } from "../../services/sessions/createSessions.services";

export const createSessionController = async (req: Request, res: Response) => {
  const session = req.body;

  const newSession = await createSessionService(session);

  return res.status(201).json({ message: newSession });
};
