import { Router } from "express";
import createPaymentController from "../controllers/payment/createPayment.controller";
import deletePaymentController from "../controllers/payment/deletePayment.controller";
import updatePaymentController from "../controllers/payment/updatePayment.controller";
import listPaymentController from "../controllers/payment/listPayment.controller";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import ensureIdUserMiddleware from "../middlewares/ensureIdUser.middleware";

const paymentRoutes = Router();

paymentRoutes.post("", ensureAuthMiddleware, createPaymentController);
paymentRoutes.patch("/:id", ensureAuthMiddleware, updatePaymentController);
paymentRoutes.get("", ensureAuthMiddleware, listPaymentController);
paymentRoutes.delete("/:id", ensureAuthMiddleware, deletePaymentController);

export default paymentRoutes;
