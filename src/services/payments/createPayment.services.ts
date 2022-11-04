import { AppDataSource } from "../../data-source";
import { PaymentInfo } from "../../entities/paymentInfo.entities";
import { IPaymentRequest } from "../../interfaces/payments";

const createPaymentServices = async (
  data: IPaymentRequest
): Promise<PaymentInfo> => {
  const { name, number, dueDate, code } = data;

  const paymentRepository = AppDataSource.getRepository(PaymentInfo);

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
