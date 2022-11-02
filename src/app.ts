import express, { json } from "express";
import "reflect-metadata";
import "express-async-errors";
import paymentRouter from "./routes/payments.routes";
import { handleErrorMiddleware } from "./middlewares/handleError.middleware";

const app = express();

app.use(json());
app.use("/payment", paymentRouter);

app.use(handleErrorMiddleware);

export default app;
