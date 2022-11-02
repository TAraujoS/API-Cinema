import express, { json } from "express";
import cinemaRoutes from "./routes/cinema.routes";

const app = express();

app.use(json());

app.use("/cinema", cinemaRoutes);
export default app;
