import { AppDataSource } from "../../data-source";
import { PaymentInfo } from "../../entities/paymentInfo.entities";
import { AppError } from "../../errors/appError";
import { IPaymentRequest } from "../../interfaces/payments";

const createPaymentServices = async (
  data: IPaymentRequest
): Promise<PaymentInfo> => {
  const { name, number, dueDate, code } = data;

  const paymentRepository = AppDataSource.getRepository(PaymentInfo);

  if (number.length !== 16) {
    throw new AppError("Invalid card number", 400);
  }

  if (!dueDate) {
    throw new AppError("Date is required", 400);
  }

  if (code.length !== 3) {
    throw new AppError("Invalid code number", 400);
  }

  const paymentInfo = paymentRepository.create({
    name,
    number,
    dueDate,
    code,
  });

  await paymentRepository.save(paymentInfo);

  return paymentInfo;
};

export default createPaymentServices;
