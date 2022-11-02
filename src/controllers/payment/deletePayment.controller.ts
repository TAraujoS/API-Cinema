import { Request, Response } from "express";
import deletePaymentServices from "../../services/payments/deletePayment.services";

const deletePaymentController = async (req: Request, res: Response) => {
  const { id } = req.params;

  await deletePaymentServices(id);

  return res.status(204);
};

export default deletePaymentController;
