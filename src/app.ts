import express from "express";
import "reflect-metadata";
import "express-async-errors";
import { handleErrorMiddleware } from "./middlewares/handleError.middleware";
import movieRoutes from "./routes/movies.routes";

const app = express();
app.use(express.json());
app.use("/movies", movieRoutes);
app.use(handleErrorMiddleware);

export default app;
