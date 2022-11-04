import { Request, Response } from "express";
import listSessionsServices from "../../services/sessions/listSessions.services";

const listSessionController = async (req: Request, res: Response) => {
  const sessions = await listSessionsServices();

  return res.status(200).json({ sessions: sessions });
};

export default listSessionController;
