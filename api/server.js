const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const path = require("path");
const sgMail = require("@sendgrid/mail");

const envPath = path.join(__dirname, "../.env");

require("dotenv").config({ path: envPath });
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const verifyHuman = async (secret, token) => {
  const response = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`,
    { method: "POST" }
  );
  const data = await response.json();

  return data;
};

const app = express();
const PORT = 5000;

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));

app.use(cors());

app.use(express.json());

app.post("/sendMail", async (req, res) => {
  const RECAPTCHA_SECRET = process.env.RECAPTCHA_SECRET_KEY;
  const { name, email, message, captchaToken } = req.body;

  const data = await verifyHuman(RECAPTCHA_SECRET, captchaToken);
  const isHuman = data.success;

  if (!isHuman) {
    return res
      .status(500)
      .json({ message: "Can't send message. Verification failed." });
  }

  const msg = {
    to: [email, "noreply@olejniczak.dev"], // Adresy e-mail odbiorców w tablicy
    from: "noreply@olejniczak.dev",
    subject: `olejniczak.dev >> New message from ${name}`,
    text: message,
    // html: "<p>Treść wiadomości w formie HTML</p>",
  };

  sgMail
    .send(msg)
    .then(() => {
      res.status(200).json({ message: "Message sent successfully." });
    })
    .catch(() => {
      res
        .status(500)
        .json({ message: "Can't send message. Something went wrong." });
    });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
