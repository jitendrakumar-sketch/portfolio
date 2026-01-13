import React,{useState,useRef,useEffect}from 'react'
import './Navbar.css'
// import logo from "../assets/logo_2_3kb.png";
import logo from "../../assets/Logo_2_3kb.png";
import underline from "../../assets/Nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/Menu_open.svg";
import menu_close from "../../assets/Menu_close.svg";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section, div[id]");

    const handleScroll = () => {
      let current = "home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 150;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("id");
        }
      });

      setMenu(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="navbar">
      <img src={logo} alt="logo" />

      <img src={menu_open} onClick={openMenu} alt="" className="nav-mob-open" />

      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />

        <li className={menu === "home" ? "active" : ""}>
          <AnchorLink className="anchor-link" href="#home">
            Home
          </AnchorLink>
          {menu === "home" && <img src={underline} alt="" />}
        </li>

        <li className={menu === "about" ? "active" : ""}>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            About me
          </AnchorLink>
          {menu === "about" && <img src={underline} alt="" />}
        </li>

        <li className={menu === "services" ? "active" : ""}>
          <AnchorLink className="anchor-link" offset={50} href="#services">
            Skills
          </AnchorLink>
          {menu === "services" && <img src={underline} alt="" />}
        </li>

        <li className={menu === "work" ? "active" : ""}>
          <AnchorLink className="anchor-link" offset={50} href="#work">
            Projects
          </AnchorLink>
          {menu === "work" && <img src={underline} alt="" />}
        </li>

        <li className={menu === "contact" ? "active" : ""}>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Contact
          </AnchorLink>
          {menu === "contact" && <img src={underline} alt="" />}
        </li>
      </ul>

      <div className="nav-connect">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          Connect With Me
        </AnchorLink>
      </div>
    </div>
  );
};


export default Navbar;
