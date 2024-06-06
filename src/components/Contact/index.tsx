import { useForm } from "react-hook-form";
import GitHubIcon from "../../assets/contact/githubIcon.png";
import LinkedinIcon from "../../assets/contact/linkedinIcon.png";
import { fadeInLeftVariant, fadeInRightVariant } from "../../utils/animation";
import { Container, Links, Link, Form, Content } from "./Contact.styles";
import { motion } from "framer-motion";

const Contact = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <Container id="contact">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInLeftVariant}
      >
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </motion.div>
      <Content>
        <Form
          action="https://formsubmit.co/halex.panama@gmail.com"
          target="_blank"
          method="POST"
          onSubmit={onSubmit}
          initial="hidden"
          whileInView="visible"
          variants={fadeInLeftVariant}
        >
          <input
            type="text"
            placeholder="NAME"
            {...register("name", {
              required: true,
              maxLength: 100,
            })}
          />
          {errors.name && (
            <p>
              {errors.name.type === "required" && "This field is required."}
              {errors.name.type === "maxLength" && "Max length is 100 char."}
            </p>
          )}
          <input
            type="text"
            placeholder="EMAIL"
            {...register("email", {
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            })}
          />
          {errors.email && (
            <p className=" text-primary-500">
              {errors.email.type === "required" && "This field is required."}
              {errors.email.type === "pattern" && "Invalid email address."}
            </p>
          )}
          <textarea
            placeholder="MESSAGE"
            {...register("message", {
              required: true,
              maxLength: 2000,
            })}
          />
          {errors.message && (
            <p>
              {errors.message.type === "required" && "This field is required."}
              {errors.message.type === "maxLength" &&
                "Max length is 2000 char."}
            </p>
          )}
          <button>Submit</button>
        </Form>
        <Links
          initial="hidden"
          whileInView="visible"
          variants={fadeInRightVariant}
        >
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
      </Content>
    </Container>
  );
};

export default Contact;
