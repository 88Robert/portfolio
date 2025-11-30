import React from "react";
import projects from "../../data/projects.json";
import styles from "./Projects.module.css"
import { ProjectCard } from "./ProjectCard";
import { useTranslation } from "../../contexts/TranslationContext";

export const Projects = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>{t("projects.title")}</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return (
            <ProjectCard key={id} project={project}/>
          );
        })}
      </div>
    </section>
  );
};
