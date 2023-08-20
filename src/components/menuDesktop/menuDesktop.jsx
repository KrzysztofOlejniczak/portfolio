import styles from "./menuDesktop.module.css";

const MenuDesktop = () => {
  return (
    <ul className={styles.container}>
      <li className={styles.link}>
        <a href="#about">About</a>
      </li>
      <li className={styles.link}>
        <a href="#projects">Projects</a>
      </li>
      <li className={styles.link}>
        <a
          href={
            process.env.PUBLIC_URL +
            "assets/Krzysztof_Olejniczak_fullstackdev.pdf"
          }
          target="_blank"
          rel="noreferrer"
        >
          CV
        </a>
      </li>
      <li className={styles.link}>
        <a
          href={process.env.PUBLIC_URL + "assets/goit_cert.pdf"}
          target="_blank"
          rel="noreferrer"
        >
          Certificate
        </a>
      </li>
      <li className={styles.link}>
        <a href="#contact">Contact</a>
      </li>
    </ul>
  );
};

export default MenuDesktop;
