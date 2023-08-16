import { nanoid } from "nanoid";
import styles from "./projectCard.module.css";

const ProjectCard = ({ project }) => {
  return (
    <div className={styles.container}>
      <img
        src={process.env.PUBLIC_URL + project.img}
        alt="Project screenshot"
      />
      <div>
        <div className={styles.tagList}>
          {project.tags.map((tag) => {
            return (
              <p className={styles.tag} key={nanoid(4)}>
                {tag}
              </p>
            );
          })}
        </div>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
