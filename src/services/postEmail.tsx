import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";

const EMAIL_SERVICE_ID = import.meta.env.VITE_EMAIL_SERVICE_ID;
const EMAIL_TEMPLATE_ID = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

interface IEmail {
  from_name: string;
  from_email: string;
  message: string;
}

const postEmail = async ({ from_name, from_email, message }: IEmail) => {
  console.log("EMAILJS_PUBLIC_KEY: " ,EMAILJS_PUBLIC_KEY)
  if (!(from_name && from_email && message)) {
    return "Invalid fields";
  }
  const templateData = {
    from_name: from_name,
    from_email: from_email,
    message: message,
  };
  try {
    await emailjs.send(
      EMAIL_SERVICE_ID,
      EMAIL_TEMPLATE_ID,
      templateData,
      {
        publicKey: EMAILJS_PUBLIC_KEY
      }
    );
    return "SUCCESS";
  } catch (err) {
    if (err instanceof EmailJSResponseStatus) {
      return "ERROR: EMAILJS FAILED... " + err;
    }
    return "ERROR: " + err;
  }
};

export default postEmail;
