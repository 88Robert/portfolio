import React from "react";
import { getImageURL } from "../../utils";
import styles from "./Hero.module.css";
import { useTranslation } from "../../contexts/TranslationContext";

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>{t("hero.title")}</h1>
        <p className={styles.description}>
          {t("hero.description")}
        </p>
        <a
          href="mailto:robert.magnusson1988@gmail.com"
          className={styles.contactBtn}
        >
          {t("hero.contactBtn")}
        </a>
      </div>
      <div className={styles.imageWrapper}>
        <img
          src={getImageURL("hero/me.JPG")}
          alt="Image of me"
          className={styles.heroImg}
        />
      </div>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
