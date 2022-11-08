import { AppDataSource } from "../../data-source";
import { PaymentInfo } from "../../entities/paymentInfo.entities";
import { AppError } from "../../errors/appError";

const deletePaymentServices = async (id: string) => {
  const paymentRepository = AppDataSource.getRepository(PaymentInfo);

  const idPayment = await paymentRepository.findOneBy({
    id: id,
  });

  if (!idPayment) {
    throw new AppError("Data not found", 404);
  }

  await paymentRepository.delete(id);
};

export default deletePaymentServices;
