import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name should contain at least 3 characters")
    .required("Name is required"),
  email: Yup.string()
    .email("Wrong e-mail format")
    .required("E-mail is required"),
  message: Yup.string()
    .min(15, "Message should contain at least 15 characters")
    .required("Message is required"),
});

export default validationSchema;
