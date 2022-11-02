import express, { json } from "express";
import { sessionsRouter } from "./routes/sessions.routes";

const app = express();

app.use(json());

app.use("/sessions", sessionsRouter);

export default app;
