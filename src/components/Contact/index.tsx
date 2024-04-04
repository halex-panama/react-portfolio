import EmailIcon from "../../assets/contact/emailIcon.png";
import GitHubIcon from "../../assets/contact/githubIcon.png";
import LinkedinIcon from "../../assets/contact/linkedinIcon.png";
import { Container, Links, Link } from "./Contact.styles";

const Contact = () => {
  return (
    <Container id="contact">
      <div>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <Links>
        <Link>
          <img src={EmailIcon} alt="email" />
          <a href="mailto:halex.panama@email.com">halex.panama@gmail.com</a>
        </Link>
        <Link>
          <img src={GitHubIcon} alt="github" />
          <a href="https://github.com/halex-panama/">My GitHub</a>
        </Link>
        <Link>
          <img src={LinkedinIcon} alt="linkedin" />
          <a href="https://www.linkedin.com/in/halexando-panama-putra-0305b1291/">
            My Linkedin
          </a>
        </Link>
      </Links>
    </Container>
  );
};

export default Contact;
