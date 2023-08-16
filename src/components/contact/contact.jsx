import styles from "./contacts.module.css";
const Contact = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Let's talk</h2>
      <p className={styles.text}>
        If you are interested in working with me on your next project, please do
        not hesitate to contact me.
      </p>
    </div>
  );
};

export default Contact;
