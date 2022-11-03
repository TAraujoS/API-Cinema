import express from "express";
import "reflect-metadata";
import "express-async-errors";
import { handleErrorMiddleware } from "./middlewares/handleError.middleware";
import loginRoutes from "./routes/loginUser.routes";
import userRoutes from "./routes/user.routes";
import paymentRoutes from "./routes/payments.routes";
import movieRoutes from "./routes/movies.routes";
import roomsRoutes from "./routes/rooms.routes";
import cinemaRoutes from "./routes/cinema.routes";
import ticketsRoutes from "./routes/tickets.routes";

const app = express();
app.use(express.json());
app.use("/users", userRoutes);
app.use("/login", loginRoutes);
app.use("/paymentInfo", paymentRoutes);
app.use("/rooms", roomsRoutes);
app.use("/movies", movieRoutes);
app.use("/cinema", cinemaRoutes);
app.use("/tickets", ticketsRoutes);
app.use(handleErrorMiddleware);

export default app;
