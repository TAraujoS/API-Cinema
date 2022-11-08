import { AppDataSource } from "../../data-source";
import { PaymentInfo } from "../../entities/paymentInfo.entities";
import { AppError } from "../../errors/appError";

const listPaymentServices = async (id: string) => {
  const paymentRepository = AppDataSource.getRepository(PaymentInfo);

  const idPayment = paymentRepository.findOneBy({ id: id });

  if (!idPayment) {
    throw new AppError("Data not found", 404);
  }

  return idPayment;
};

export default listPaymentServices;
