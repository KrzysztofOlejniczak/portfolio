import Logo from "../logo/logo";
import MenuDesktop from "../menuDesktop/menuDesktop";
import MenuMobile from "../menuMobile/menuMobile";
import styles from "./header.module.css";
import { useMediaQuery } from "react-responsive";

const Header = () => {
  const isDesktop = useMediaQuery({ query: "(min-width: 851px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 850px)" });

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.menu}>
          <Logo />
          {isDesktop && <MenuDesktop />}
          {isTabletOrMobile && <MenuMobile />}
        </div>
        <div id="about" className={styles.decoration}>
          <p className={styles.subtitle}>Fullstack web developer</p>
          <h1 className={styles.title}>Hi, I'm Chris Olejniczak</h1>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
          <div className={styles.links}>
            <a
              href="#projects"
              className={`${styles.link} ${styles.primaryLink}`}
            >
              Projects
            </a>
            <a
              href="https://www.linkedin.com/in/krzysztof-olejniczak-0b1629111/
"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.link} ${styles.secondaryLink}`}
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
