import express from "express";
import "reflect-metadata";
import "express-async-errors";
import { handleErrorMiddleware } from "./middlewares/handleError.middleware";
import loginRoutes from "./routes/loginUser.routes";
import userRoutes from "./routes/user.routes";
import movieRoutes from "./routes/movies.routes";
import cinemaRoutes from "./routes/cinema.routes";

const app = express();
app.use(express.json());
app.use("/users", userRoutes);
app.use("/login", loginRoutes);
app.use("/movies", movieRoutes);
app.use(handleErrorMiddleware);

app.use("/cinema", cinemaRoutes);
export default app;
