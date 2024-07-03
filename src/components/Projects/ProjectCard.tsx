import { useState } from "react";
import { fadeInLeftVariant, fadeInRightVariant } from "../../utils/animation";
import {
  Container,
  TextContainer,
  Skills,
  Skill,
  Links,
  Link,
  ProjectImg,
  Skeleton,
} from "./ProjectCard.styles";

type Props = {
  project: {
    title: string;
    imageSrc: string;
    description: string;
    skills: string[];
    demo: string;
    source: string;
    reverse: boolean;
  };
};

const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source, reverse },
}: Props) => {
  const [loadingImage, setLoadingImage] = useState(true);
  return (
    <Container reverse={reverse}>
      {loadingImage && <Skeleton reverse={reverse} />}
      <ProjectImg
        initial="hidden"
        whileInView="visible"
        variants={reverse ? fadeInRightVariant : fadeInLeftVariant}
        src={imageSrc}
        alt={title}
        loading="lazy"
        onLoad={() => setLoadingImage(false)}
      />
      <TextContainer
        initial="hidden"
        whileInView="visible"
        variants={!reverse ? fadeInRightVariant : fadeInLeftVariant}
      >
        <h3>{title}</h3>
        <Skills>
          {skills.map((skill, id) => (
            <Skill key={id}>{skill}</Skill>
          ))}
        </Skills>
        <p>{description}</p>
        <Links>
          <Link href={demo}>Visit Website</Link>
          <Link href={source}>Source Code</Link>
        </Links>
      </TextContainer>
    </Container>
  );
};

export default ProjectCard;
