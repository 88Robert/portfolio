import React from "react";
import styles from "./About.module.css";
import { getImageURL } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Om Mig</h2>
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
              <h3>Frontend Utvecklare</h3>
              <p>
                Jag är en frontend utvecklare under utblidning, där jag
                utvecklar mina kunskaper för att bygga och optimera responsiva
                sidor.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageURL("about/ServerIcon.png")} alt="Cursor Icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend</h3>
              <p>
                Har skapat mig en grundförståelse i uppbyggnad av backend och
                API.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageURL("about/Design.png")} alt="Cursor Icon" />
            <div className={styles.aboutItemText}>
              <h3>Säkerhet</h3>
              <p>
                Förutom Frontend har våran utbildning fokuserat på webbsäkerhet.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
