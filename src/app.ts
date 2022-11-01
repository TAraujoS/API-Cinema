import express, { json } from "express";
import ticketsRoutes from "./routes/tickets.routes";

const app = express();

app.use(json());

app.use("/tickets", ticketsRoutes);

export default app;
