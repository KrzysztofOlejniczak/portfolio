import { useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import Burger from "./burger.svg";
import Cross from "./cross.svg";
import styles from "./menuMobile.module.css";
import "./transition.css";
import Socials from "../socials/socials";

const MenuMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const nodeRef = useRef(null);

  const openMenu = () => {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  };

  return (
    <div>
      <img
        src={Burger}
        alt="Menu button"
        className={styles.button}
        onClick={openMenu}
      />
      {isOpen && <div onClick={closeMenu} className={styles.backdrop}></div>}
      <CSSTransition
        nodeRef={nodeRef}
        in={isOpen}
        timeout={300}
        classNames={"transition"}
        unmountOnExit
        onEnter={() => document.addEventListener("keydown", handleKeyDown)}
        onExit={() => document.removeEventListener("keydown", handleKeyDown)}
      >
        <div className={styles.menu} ref={nodeRef}>
          <img
            src={Cross}
            alt="Close button"
            className={styles.button}
            onClick={closeMenu}
          />
          <a href="#about" onClick={closeMenu} className={styles.link}>
            About
          </a>
          <a href="#projects" onClick={closeMenu} className={styles.link}>
            Projects
          </a>
          <a
            href={
              process.env.PUBLIC_URL +
              "assets/Krzysztof_Olejniczak_fullstackdev.pdf"
            }
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
            className={styles.link}
          >
            CV
          </a>
          <a
            href={process.env.PUBLIC_URL + "assets/goit_cert.pdf"}
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
            className={styles.link}
          >
            Certificate
          </a>
          <a href="#contact" onClick={closeMenu} className={styles.link}>
            Contact
          </a>
          <Socials />
        </div>
      </CSSTransition>
    </div>
  );
};

export default MenuMobile;
