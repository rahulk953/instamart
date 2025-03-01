import { Resend } from "resend";
import dotenv from "dotenv";
dotenv.config();
if (!process.env.RESEND_API) {
  console.log("Provide RESEND_API inside the .env file");
}

const resend = new Resend(process.env.RESEND_API);

const sendEmail = async ({ sendTO, subject, html }) => {
  try {
    const { data, error } = await resend.emails.send({
      from: "instaMart <onboarding@resend.dev>",
      to: sendTO,
      subject: subject,
      html: html,
    });
    if (error) {
      return console.error({ error });
    }
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default sendEmail;
