import { Nav, Menu, MenuBtn, MenuItems } from "./Navbar.styles";
import OpenBtn from "../../assets/nav/menuIcon.png";
import CloseBtn from "../../assets/nav/closeIcon.png";
import { useState } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <Nav>
      <a className="nav-title" href="/">
        My Portfolio
      </a>
      <Menu>
        <MenuBtn
          src={menu ? CloseBtn : OpenBtn}
          alt="menu-button"
          onClick={() => setMenu(!menu)}
        />

        <MenuItems className={menu ? "menuOpen" : undefined}>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </MenuItems>
      </Menu>
    </Nav>
  );
};

export default Navbar;
