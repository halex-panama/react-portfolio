import {
  Nav,
  Menu,
  MenuBtn,
  MenuItems,
  NavTitle,
  MenuLink,
} from "./Navbar.styles";
import OpenBtn from "../../assets/nav/menuIcon.png";
import CloseBtn from "../../assets/nav/closeIcon.png";
import { useState } from "react";
import {
  fadeInLeftVariant,
  fadeInRightVariant,
  fadeInMenuVariant,
} from "../../utils/animation";
import { goToTop } from "../ScrollTopButton";

const menuLinks = [
  {
    link: "About",
    to: "#about",
  },
  {
    link: "Skills",
    to: "#skills",
  },
  {
    link: "Projects",
    to: "#projects",
  },
  {
    link: "Contact",
    to: "#contact",
  },
];

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <Nav>
      <NavTitle
        initial="hidden"
        whileInView="visible"
        variants={fadeInLeftVariant}
        onClick={goToTop}
      >
        My Portfolio
      </NavTitle>
      <Menu
        initial="hidden"
        whileInView="visible"
        variants={fadeInRightVariant}
      >
        <MenuBtn
          whileTap={{ rotate: 75, scale: 0.9 }}
          src={menu ? CloseBtn : OpenBtn}
          alt="menu-button"
          onClick={() => setMenu(!menu)}
        />

        <MenuItems
          initial="hidden"
          whileInView="visible"
          variants={fadeInRightVariant}
          className={menu ? "menuOpen" : undefined}
        >
          {menuLinks.map((link, id) => (
            <li key={id}>
              <MenuLink
                initial="initial"
                whileInView="animate"
                variants={fadeInMenuVariant}
                custom={id}
                onClick={() => setMenu(false)}
                href={link.to}
              >
                {link.link}
              </MenuLink>
            </li>
          ))}
        </MenuItems>
      </Menu>
    </Nav>
  );
};

export default Navbar;
