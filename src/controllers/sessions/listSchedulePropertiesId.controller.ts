import { Request, Response } from "express";
import { listSchedulePropertiesIdServices } from "../../services/schedules/listSchedulePropertiesId.services";

export const listSchedulePropertiesIdController = async (
  req: Request,
  res: Response
) => {
  const id = req.params.id;
  const schedules = await listSchedulePropertiesIdServices(id);

  return res.status(200).json({ schedules: schedules });
};
