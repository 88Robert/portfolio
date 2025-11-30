import React from "react";
import styles from "./About.module.css";
import { getImageURL } from "../../utils";
import { useTranslation } from "../../contexts/TranslationContext";

export const About = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>{t("about.title")}</h2>
      <div className={styles.content}>
        <img
          src={getImageURL("about/aboutViking.png")}
          alt="Me with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageURL("about/cursorIcon.png")} alt="Cursor Icon" />
            <div className={styles.aboutItemText}>
              <h3>{t("about.frontend.title")}</h3>
              <p>
                {t("about.frontend.description")}
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageURL("about/ServerIcon.png")} alt="Cursor Icon" />
            <div className={styles.aboutItemText}>
              <h3>{t("about.backend.title")}</h3>
              <p>
                {t("about.backend.description")}
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageURL("about/Design.png")} alt="Cursor Icon" />
            <div className={styles.aboutItemText}>
              <h3>{t("about.security.title")}</h3>
              <p>
                {t("about.security.description")}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
