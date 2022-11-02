import express, { json} from "express";
import { handleErrorMiddleware } from "./middlewares/handleError.middleware";
import loginRoutes from "./routes/loginUser.routes";
import userRoutes from "./routes/user.routes";

const app = express();

app.use(json())
app.use("/users", userRoutes)
app.use("/login", loginRoutes)


app.use(handleErrorMiddleware)

export default app;
