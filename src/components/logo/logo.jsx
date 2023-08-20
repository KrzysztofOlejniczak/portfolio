import logoIcon from "./logo.svg";
import styles from "./logo.module.css";
import { useMediaQuery } from "react-responsive";

const Logo = () => {
  const shouldShowText = useMediaQuery({ query: "(min-width: 400px)" });
  return (
    <a href="/" className={styles.container}>
      <img src={logoIcon} alt="Logo" className={styles.vector} />
      {shouldShowText && <p className={styles.text}>Olejniczak.dev</p>}
    </a>
  );
};

export default Logo;
