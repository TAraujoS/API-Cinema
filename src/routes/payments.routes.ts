import { Router } from "express";
import createPaymentController from "../controllers/payment/createPayment.controller";
import deletePaymentController from "../controllers/payment/deletePayment.controller";
import updatePaymentController from "../controllers/payment/updatePayment.controller";
import listPaymentController from "../controllers/payment/listPayment.controller";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import ensureUpdateMiddleware from "../middlewares/ensureUpdate.middleware";
import ensureIdUserMiddleware from "../middlewares/ensureIdUser.middleware";

const paymentRoutes = Router();

paymentRoutes.post(
  "",
  ensureAuthMiddleware,
  ensureIdUserMiddleware,
  createPaymentController
);
paymentRoutes.patch(
  "/:id",
  ensureAuthMiddleware,
  ensureIdUserMiddleware,
  updatePaymentController
);
paymentRoutes.get(
  "/:id",
  ensureAuthMiddleware,
  ensureIdUserMiddleware,
  listPaymentController
);
paymentRoutes.delete(
  "/:id",
  ensureAuthMiddleware,
  ensureIdUserMiddleware,
  deletePaymentController
);

export default paymentRoutes;
