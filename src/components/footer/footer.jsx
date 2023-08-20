import Socials from "../socials/socials";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <a
        href="https://www.figma.com/community/file/1092530179065055790/Simple-Portfolio-%7C-Portafolio"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.text}
      >
        Designed by Sergio González Sánchez
      </a>
      <Socials />
    </footer>
  );
};

export default Footer;
