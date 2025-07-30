import { useState } from "react";

import { FaBars } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

import Logo from "./../../assets/images/logo.jpg";

import "./NavBar.scss";

const NavBar = () => {
  const [isOpen, setIsOPen] = useState(false);

  return (
    <nav className="nav">
      <h1 className="nav__logo">
        <a href="/" className="nav__link">
          <img src={Logo} alt="Petal Logo" />
          Petal Ladies Vocational Training Center
          <img src={Logo} alt="Petal Logo" />
        </a>
      </h1>
      <button className="nav__button" onClick={() => setIsOPen(!isOpen)}>
        {isOpen ? <IoMdClose /> : <FaBars />}
      </button>
      <ul className={`nav__list ${isOpen ? "nav__list--show" : ""}`}>
        <li className="nav__item">
          <a href="/about" className="nav__link">
            About Us
          </a>
        </li>
        <li className="nav__item">
          <a href="/admissions" className="nav__link">
            Admissions
          </a>
        </li>
        <li className="nav__item">
          <a href="/programs" className="nav__link">
            Programs
          </a>
        </li>
        {/* <li className="nav__item">
          <a href="/gallery" className="nav__link">
            Gallery
          </a>
        </li> */}
        <li className="nav__item">
          <a href="/donate" className="nav__link">
            Donate
          </a>
        </li>
        <li className="nav__item">
          <a href="/contacts" className="nav__link">
            Contacts
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default NavBar;
