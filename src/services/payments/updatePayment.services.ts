import { AppDataSource } from "../../data-source";
import { PaymentInfo } from "../../entities/paymentInfo.entities";
import { IPaymentRequest } from "../../interfaces/payments";
import { AppError } from "../../errors/appError";

const updatePaymentServices = async (
  { name, number, dueDate, code }: IPaymentRequest,
  id: string
): Promise<PaymentInfo> => {
  const paymentRepository = AppDataSource.getRepository(PaymentInfo);

  const findPaymentInfo = await paymentRepository.findOneBy({ id });

  if (!findPaymentInfo) {
    throw new AppError("User not found", 404);
  }

  await paymentRepository.update(id, {
    name: name ? name : findPaymentInfo.name,
    number: number ? number : findPaymentInfo.number,
    dueDate: dueDate ? dueDate : findPaymentInfo.dueDate,
    code: code ? code : findPaymentInfo.code,
  });

  const newData = await paymentRepository.findOneBy({ id });

  return newData;
};

export default updatePaymentServices;
