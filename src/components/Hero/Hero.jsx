import React from "react";
import { getImageURL } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hej, Jag heter Robert!</h1>
        <p className={styles.description}>
          Driven Frontentutvecklare med inrikting Webbsäkerhet. Jag har ett
          stort engagemang i det jag gör och är alltid nyfiken och öppen för nya
          erfarenheter. Klicka på länkarna för att veta mer om mig.
        </p>
        <a
          href="mailto:robert.magnusson1988@gmail.com"
          className={styles.contactBtn}
        >
          Kontakta Mig
        </a>
      </div>
      <img
        src={getImageURL("hero/ful-bild.JPG")}
        alt="Image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
