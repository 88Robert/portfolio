import React from 'react'
import { getImageURL } from "../../utils";
import styles from "./Contact.module.css"

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
        <div className={styles.text}>
            <h3>Kontakt</h3>
            <p>Hör gärna av er!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageURL("contact/emailIcon.png")} alt="Email icon" />
                    <a href="mailto:robert.magnusson1988@gmail.com">robert.magnusson1988@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageURL("contact/linkedinIcon.png")} alt="Linked In icon" />
                    <a href="https://www.linkedin.com/in/robert-magnusson-21b991169/">Linked In: Robert Magnusson</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageURL("contact/githubIcon.png")} alt="Github icon" />
                    <a href="https://github.com/dashboard">Github: 88Robert</a>
                </li>
            </ul>
    </footer>
  )
}
