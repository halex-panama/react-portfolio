import { fadeInLeftVariant } from "../../utils/animation";
import projects from "../../data/projects.json";
import ProjectCard from "./ProjectCard";
import { Container, ProjectsContainer, Heading } from "./Projects.styles";

const Projects = () => {
  return (
    <Container id="projects">
      <Heading
        initial="hidden"
        whileInView="visible"
        variants={fadeInLeftVariant}
      >
        Projects
      </Heading>
      <ProjectsContainer>
        {projects.map((project, id) => (
          <ProjectCard key={id} project={project} />
        ))}
      </ProjectsContainer>
    </Container>
  );
};

export default Projects;
