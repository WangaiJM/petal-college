import { useState } from "react";

import { FaBars } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

import "./NavBar.scss";

const NavBar = () => {
  const [isOpen, setIsOPen] = useState(false);

  return (
    <nav className="nav">
      <h1 className="nav__logo">
        <a href="/" className="nav__link">
          Petal College
        </a>
      </h1>
      <button className="nav__button" onClick={() => setIsOPen(!isOpen)}>
        {isOpen ? <IoMdClose /> : <FaBars />}
      </button>
      <ul className={`nav__list ${isOpen ? "nav__list--show" : ""}`}>
        <li className="nav__item">
          <a href="/About" className="nav__link">
            About Us
          </a>
        </li>
        <li className="nav__item">
          <a href="/Admissions" className="nav__link">
            Admissions
          </a>
        </li>
        <li className="nav__item">
          <a href="/Programs" className="nav__link">
            Programs
          </a>
        </li>
        <li className="nav__item">
          <a href="/Gallery" className="nav__link">
            Gallery
          </a>
        </li>
        <li className="nav__item">
          <a href="/Contacts" className="nav__link">
            Contacts
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default NavBar;
