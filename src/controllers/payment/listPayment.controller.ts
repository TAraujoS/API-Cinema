import { Request, Response } from "express";
import listPaymentServices from "../../services/payments/listPayment.services";

const listPaymentController = async (req: Request, res: Response) => {
  const { id } = req.params;

  const listPayment = await listPaymentServices(id);

  res.status(200).json(listPayment);
};

export default listPaymentController;
