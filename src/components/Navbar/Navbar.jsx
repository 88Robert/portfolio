import { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageURL } from "../../utils";
import { useTranslation } from "../../contexts/TranslationContext";

export const Navbar = () => {
  const [menuOpen, setMenuOPen] = useState(false);
  const { t, toggleLanguage, language } = useTranslation();

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        {t("navbar.portfolio")}
      </a>
      <div className={styles.menu}>
        <button 
          className={styles.translateBtn}
          onClick={toggleLanguage}
          aria-label="Toggle language"
        >
          {language === 'sv' ? 'EN' : 'SV'}
        </button>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageURL("nav/closeIcon.png")
              : getImageURL("nav/menuIcon.png")
          }
          alt="menu-btn"
          onClick={() => setMenuOPen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOPen(false)}
        >
          <li>
            <a href="#about">{t("navbar.about")}</a>
          </li>
          <li>
            <a href="#experience">{t("navbar.experience")}</a>
          </li>
          <li>
            <a href="#projects">{t("navbar.projects")}</a>
          </li>
          <li>
            <a href="#contact">{t("navbar.contact")}</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
