import { Request, Response } from "express";
import deleteSessionService from "../../services/sessions/deleteService.services";

const deleteSessionController = async (req: Request, res: Response) => {
  const { id } = req.params;

  await deleteSessionService(id);

  return res.status(204).json("");
};

export default deleteSessionController;
