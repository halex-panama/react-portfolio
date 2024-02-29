import projects from "../../data/projects.json";
import ProjectCard from "./ProjectCard";
import { Container, ProjectsContainer } from "./Projects.styles";

const Projects = () => {
  return (
    <Container id="projects">
      <h2>Projects</h2>
      <ProjectsContainer>
        {projects.map((project, id) => (
          <ProjectCard key={id} project={project} />
        ))}
      </ProjectsContainer>
    </Container>
  );
};

export default Projects;
