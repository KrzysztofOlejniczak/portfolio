import styles from "./projects.module.css";
import ProjectCard from "../projectCard/projectCard";
import data from "../../data/projects.json";
import { nanoid } from "nanoid";

const Projects = () => {
  return (
    <div className={styles.container}>
      {data.map((e) => {
        return <ProjectCard key={nanoid(4)} project={e} />;
      })}
    </div>
  );
};

export default Projects;
