import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer";
import { IPaymentRequest } from "../../interfaces/payments";
import createPaymentServices from "../../services/payments/createPayment.services";

const createPaymentController = async (req: Request, res: Response) => {
  const data: IPaymentRequest = req.body;

  const createdPayment = await createPaymentServices(data);

  return res.status(201).json(instanceToPlain(createdPayment));
};

export default createPaymentController;
