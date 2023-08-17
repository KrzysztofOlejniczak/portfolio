import ContactForm from "../contactForm/contactForm";
import styles from "./contact.module.css";
const Contact = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>Let's talk</h2>
      <p className={styles.text}>
        If you are interested in working with me on your next project, please do
        not hesitate to contact me.
      </p>
      <ContactForm />
    </section>
  );
};

export default Contact;
