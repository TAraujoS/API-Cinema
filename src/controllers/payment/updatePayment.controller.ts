import { Request, Response } from "express";
import { IPaymentRequest } from "../../interfaces/payments";
import updatePaymentServices from "../../services/payments/updatePayment.services";

const updatePaymentController = async (req: Request, res: Response) => {
  const data: IPaymentRequest = req.body;

  const { id } = req.params;

  const updatedPayment = await updatePaymentServices(data, id);

  return res.status(200).json(updatedPayment);
};

export default updatePaymentController;
