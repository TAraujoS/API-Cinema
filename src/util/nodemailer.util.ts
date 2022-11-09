import { createTransport } from "nodemailer";
import { IEmailRequest } from "../interfaces/email/email.interface";
import "dotenv/config"
import { AppError } from "../errors/appError";

const sendEmail = async ({subject, text, to}:IEmailRequest) =>{

  const transporter = createTransport({
    host: "smtp-mail.outlook.com",
    port: 587,
    secure: false,
    auth:{
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }

  })

  await transporter.sendMail({
    from: process.env.SMTP_USER,
    to: to,
    subject: subject,
    html: text
  }).then(()=>{
    console.log("Email send with success")
  }).catch((err)=>{
    console.log(err)
    throw new AppError("Error sending email, try again later")
  })

}

export {sendEmail}