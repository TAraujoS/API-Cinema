import { Request, Response } from "express";
import { ISessionUpdate } from "../../interfaces/sessions";
import updateSessionService from "../../services/sessions/updateSession.services";

const updateSessionController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const data: ISessionUpdate = req.body;

  const updatedSession = await updateSessionService(data, id);

  return res.status(200).json({ session: updatedSession });
};

export default updateSessionController;
