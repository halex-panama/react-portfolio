import { Container, Content, Skill } from "./Skills.styles";
import checkmark from "../../assets/skills/checkmark.png";
import skills from "../../data/skills.json";

const Skills = () => {
  return (
    <Container id="skills">
      <h2>Skills</h2>
      <Content>
        {skills.map((skill, id) => (
          <Skill key={id}>
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
