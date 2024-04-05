import { fadeInBottomVariant, fadeInLeftVariant } from "../../data/animation";
import { Container, Content, Heading } from "./About.styles";

const About = () => {
  return (
    <Container id="about">
      <Heading
        initial="hidden"
        whileInView="visible"
        variants={fadeInLeftVariant}
      >
        About Me
      </Heading>
      <Content
        initial="hidden"
        whileInView="visible"
        variants={fadeInBottomVariant}
      >
        <p>
          Hi there <br /> I'm Alex, a passionate Frontend Developer dedicated to
          crafting captivating web experiences. With a solid foundation in web
          development I'm interesting in building responsive websites or dynamic
          web applications. Explore my portfolio to see my latest projects and
          let's collaborate to bring your vision to the digital world.
        </p>
      </Content>
    </Container>
  );
};

export default About;
