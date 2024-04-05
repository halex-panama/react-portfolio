import { Container, Content, ContactBtn, HeroImg } from "./Hero.styles";
import ProfileImg from "../../assets/hero/hero.jpg";
import { fadeInTopVariant, fadeInBottomVariant } from "../../data/animation";

const Hero = () => {
  return (
    <Container>
      <Content
        initial="hidden"
        whileInView="visible"
        variants={fadeInBottomVariant}
      >
        <h1>Hi I'm Alex</h1>
        {/* <p>
          Welcome to My Portfolio <br /> I'm Alex, a passionate Frontend
          Developer dedicated to crafting captivating web experiences. With a
          solid foundation in HTML, CSS, and JavaScript, I specialize in
          bringing designs to life and creating intuitive user interfaces.
          Whether it's building responsive websites or dynamic web applications,
          I thrive on turning ideas into reality. Explore my portfolio to see my
          latest projects and let's collaborate to bring your vision to the
          digital world.
        </p> */}
        <p>Frontend Developer</p>
        <ContactBtn href="mailto:halex.panama@email.com">Contact Me</ContactBtn>
      </Content>
      <HeroImg
        initial="hidden"
        whileInView="visible"
        variants={fadeInTopVariant}
        src={ProfileImg}
        alt="hero image"
      />
    </Container>
  );
};

export default Hero;
