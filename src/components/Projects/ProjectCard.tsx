import { fadeInLeftVariant, fadeInRightVariant } from "../../utils/animation";
import {
  Container,
  TextContainer,
  Skills,
  Skill,
  Links,
  Link,
} from "./ProjectCard.styles";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/black-and-white.css";

type Props = {
  project: {
    title: string;
    imageSrc: string;
    placeholderSrc: string;
    description: string;
    skills: string[];
    demo: string;
    source: string;
    reverse: boolean;
  };
};

const ProjectCard = ({
  project: {
    title,
    imageSrc,
    placeholderSrc,
    description,
    skills,
    demo,
    source,
    reverse,
  },
}: Props) => {
  return (
    <Container reverse={reverse}>
      <LazyLoadImage
        src={imageSrc}
        placeholderSrc={placeholderSrc}
        className="lazy-img"
        effect="black-and-white"
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
