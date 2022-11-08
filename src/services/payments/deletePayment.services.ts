import { AppDataSource } from "../../data-source";
import { PaymentInfo } from "../../entities/paymentInfo.entities";
import { AppError } from "../../errors/appError";

const deletePaymentServices = async (id: string) => {
  const paymentRepository = AppDataSource.getRepository(PaymentInfo);
<<<<<<< HEAD
  const idPayment = await paymentRepository.findOneBy({
=======

  const idPayment = paymentRepository.findOneBy({
>>>>>>> 9d2efb783a48f6d563e4874ec4178b0d46001616
    id: id,
  });

  if (!idPayment) {
    throw new AppError("Data not found", 404);
  }

  await paymentRepository.delete(id);
};

export default deletePaymentServices;
