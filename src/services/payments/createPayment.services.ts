import { AppDataSource } from "../../data-source";
import { PaymentInfo } from "../../entities/paymentInfo.entities";
import { AppError } from "../../errors/appError";
import { IPaymentRequest } from "../../interfaces/payments";
import { User } from "../../entities/user.entities";

const createPaymentServices = async ({
  name,
  number,
  dueDate,
  code,
  userId,
}: IPaymentRequest): Promise<PaymentInfo> => {
  const paymentRepository = AppDataSource.getRepository(PaymentInfo);
  const userRepository = AppDataSource.getRepository(User);

  if (number.length !== 16) {
    throw new AppError("Invalid card number", 400);
  }

  const newDueDate = dueDate + "-01";

  if (!newDueDate) {
    throw new AppError("Date is required", 400);
  }

  if (code.length !== 3) {
    throw new AppError("Invalid code number", 400);
  }

  const findPayment = await paymentRepository.findOne({
    where: { name, number },
  });

  if (findPayment) {
    throw new AppError("Payment already exists", 400);
  }

  const paymentInfo = paymentRepository.create({
    name,
    number,
    dueDate: newDueDate,
    code,
  });

  await paymentRepository.save(paymentInfo);

  await userRepository.update(
    { id: userId },
    {
      paymentInfo,
    }
  );

  return paymentInfo;
};

export default createPaymentServices;
