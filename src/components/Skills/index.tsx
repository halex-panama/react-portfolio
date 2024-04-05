import { Container, Content, Skill, Heading } from "./Skills.styles";
import checkmark from "../../assets/skills/checkmark.png";
import skills from "../../data/skills.json";
import { fadeInBottomVariant, fadeInLeftVariant } from "../../data/animation";

const Skills = () => {
  return (
    <Container id="skills">
      <Heading
        initial="hidden"
        whileInView="visible"
        variants={fadeInLeftVariant}
      >
        Skills
      </Heading>
      <Content>
        {skills.map((skill, id) => (
          <Skill
            initial="hidden"
            whileInView="visible"
            variants={fadeInBottomVariant}
            key={id}
          >
            <img src={checkmark} alt="checkmark icon" />
            <div>
              <h3>{skill.title}</h3>
              <p>{skill.level}</p>
            </div>
          </Skill>
        ))}
      </Content>
    </Container>
  );
};

export default Skills;
