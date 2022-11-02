import { Router } from "express";
import createPaymentController from "../controllers/payment/createPayment.controller";
import { ensureAuthMiddleware } from "../middlewares/ensureAuth.middleware";

const paymentRouter = Router();

paymentRouter.post("", ensureAuthMiddleware, createPaymentController);

export default paymentRouter;
