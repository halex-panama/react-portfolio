import { useEffect, useState } from "react";
import scrollTopImg from "../../assets/nav/Arrow_top.svg";
import { Container } from "./ScrollTopButton.styles";

const goToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const ScrollTopButton = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  return (
    <Container>
      {showTopBtn && (
        <img onClick={goToTop} src={scrollTopImg} alt="scroll top button" />
      )}
    </Container>
  );
};

export { ScrollTopButton as default, goToTop };
