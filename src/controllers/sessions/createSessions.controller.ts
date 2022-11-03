import { Request, Response } from "express";
import { Session } from "inspector";
import createSessionService from "../../services/sessions/createSessions.services";

const createSessionController = async (req: Request, res: Response) => {
  const session = req.body;

  const newSession = await createSessionService(session);

  return res.status(201).json({ message: newSession });

  // if (newSession instanceof Session) {
  //   return res.status(201).json(newSession);
  // }

  // return res.status(newSession[1] as number).json(newSession[0]);
};

export default createSessionController;
