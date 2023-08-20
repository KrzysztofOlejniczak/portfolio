import styles from "./socials.module.css";
import LinkedInLogo from "./linkedin.svg";
import GithubLogo from "./github.svg";

const Socials = () => {
  return (
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
            alt="LinkedIn logotype"
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
  );
};

export default Socials;
