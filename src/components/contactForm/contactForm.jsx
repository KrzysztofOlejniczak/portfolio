import ReCAPTCHA from "react-google-recaptcha";
import styles from "./contactForm.module.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import validationSchema from "../../utils/validation";
import { toast } from "react-toastify";

const ContactForm = () => {
  const recaptchaRef = React.createRef();

  const [captchaToken, setCaptchaToken] = useState(null);
  const [captchaIsChecked, setCaptchaIsChecked] = useState(false);

  const onCaptchaChange = (value) => {
    setCaptchaToken(value);
    setCaptchaIsChecked(true);
  };

  const onCaptchaExpired = () => {
    setCaptchaToken(null);
    setCaptchaIsChecked(false);
  };

  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const onFormSubmit = async (values, { resetForm }) => {
    const url = "http://localhost:5000/sendMail"; // Podstaw właściwy adres URL API
    const dataToSend = { ...values, captchaToken };

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToSend),
    };
    fetch(url, requestOptions)
      .then((response) => response.json()) // Odpowiedź również jest parsowana do JSON
      .then((data) => {
        toast.success(data.message);
      })
      .catch((error) => {
        toast.error(error.message);
      });

    recaptchaRef.current.reset();
    setCaptchaToken(null);
    setCaptchaIsChecked(false);
    resetForm();
  };

  return (
    <div className={styles.container}>
      <Formik
        initialValues={initialValues}
        onSubmit={onFormSubmit}
        validationSchema={validationSchema}
        validateOnChange={false}
        validateOnBlur={false}
      >
        <Form className={styles.form}>
          <div className={styles.element}>
            <label htmlFor="name" className={styles.label}>
              Name
            </label>
            <Field
              className={styles.input}
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
            />
            <ErrorMessage
              className={styles.errorMessage}
              name="name"
              component="div"
            />
          </div>
          <div className={styles.element}>
            <label htmlFor="email" className={styles.label}>
              E-mail
            </label>
            <Field
              className={styles.input}
              type="email"
              id="email"
              name="email"
              placeholder="you@email.com"
            />
            <ErrorMessage
              className={styles.errorMessage}
              name="email"
              component="div"
            />
          </div>
          <div className={styles.element}>
            <label htmlFor="message" className={styles.label}>
              Your message
            </label>
            <Field
              className={styles.textArea}
              as="textarea"
              id="message"
              name="message"
            />
            <ErrorMessage
              className={styles.errorMessage}
              name="message"
              component="div"
            />
          </div>
          <div className={styles.captcha}>
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
              onChange={onCaptchaChange}
              onExpired={onCaptchaExpired}
              hl="en"
            />
          </div>
          <button
            className={styles.button}
            type="submit"
            disabled={!captchaIsChecked}
          >
            Send message
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
