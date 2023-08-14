import styles from "./footer.module.css";
import GithubLogo from "./github.svg";
import LinkedInLogo from "./linkedin.svg";

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
      <ul className={styles.socials}>
        <li>
          <a
            href="https://www.linkedin.com/in/krzysztof-olejniczak-0b1629111/
"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={LinkedInLogo}
              alt="LinkdeIn logotype"
              className={styles.socialIcon}
            />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/KrzysztofOlejniczak"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={GithubLogo}
              alt="GitHub logotype"
              className={styles.socialIcon}
            />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
