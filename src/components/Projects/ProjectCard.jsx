import { Container, Skills, Skill, Links, Link } from "./ProjectCard.styles";

const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <Container>
      <img src={imageSrc} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <Skills>
        {skills.map((skill, id) => (
          <Skill key={id}>{skill}</Skill>
        ))}
      </Skills>
      <Links>
        <Link href={demo}>Demo</Link>
        <Link href={source}>Source</Link>
      </Links>
    </Container>
  );
};

export default ProjectCard;
