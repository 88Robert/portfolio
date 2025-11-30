import React from "react";
import skills from "../../data/skills.json";
import { getImageURL } from "../../utils";
import history from "../../data/history.json";
import styles from './Experience.module.css'
import { useTranslation } from "../../contexts/TranslationContext";

export const Experience = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>{t("experience.title")}</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageURL(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            const translatedHistory = t(`experience.history.${id}`);
            return (
              <li key={id} className={styles.historyItem}>
                <img
                  src={getImageURL(historyItem.imageSrc)}
                  alt={`${translatedHistory.organisation} Logo`}
                />
                <div className={styles.historyItemDetails}>
                  <h3>{`${translatedHistory.role}, ${translatedHistory.organisation}`}</h3>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul>{translatedHistory.experiences.map((experience, expId) => {
                    return <li key={expId}>{experience}</li>
                  })}</ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
