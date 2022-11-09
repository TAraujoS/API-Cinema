import "reflect-metadata";
import express, {Request, Response} from "express";
import "express-async-errors";
import cinemaRoutes from "./routes/cinema.routes";
import loginRoutes from "./routes/loginUser.routes";
import movieRoutes from "./routes/movies.routes";
import paymentRoutes from "./routes/payments.routes";
import roomsRoutes from "./routes/rooms.routes";
import sessionsRouter from "./routes/sessions.routes";
import userRoutes from "./routes/user.routes";
import ticketsRoutes from "./routes/tickets.routes";
import { handleErrorMiddleware } from "./middlewares/handleError.middleware";
import { IEmailRequest } from "./interfaces/email/email.interface";
import { sendEmail } from "./util/nodemailer.util";
import { AppError } from "./errors/appError";

const app = express();
app.use(express.json());

app.use("/users", userRoutes);
app.use("/login", loginRoutes);
app.use("/paymentInfo", paymentRoutes);
app.use("/rooms", roomsRoutes);
app.use("/movies", movieRoutes);
app.use("/sessions", sessionsRouter);
app.use("/cinema", cinemaRoutes);
app.use("/tickets", ticketsRoutes);
app.use(handleErrorMiddleware);

app.post("/email", async (req: Request, res: Response)=>{
    try {

      // Assunto do email
      //subject -> assunto
      // text -> texto
      //email -> email do destinatario

      const {subject, text, to}:IEmailRequest = req.body

      await sendEmail({subject, text, to})

      return res.json({
        message: "Email sended with success! "
      })
      
    } catch (error) {
      console.error(error.message)
      throw new AppError("Email not sended", 400)
    }
})

export default app;
