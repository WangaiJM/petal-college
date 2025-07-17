import { FaBars } from "react-icons/fa6";

const NavBar = () => {
  return (
    <nav className="nav">
      <h1 className="nav__logo">
        <a href="/" className="nav__link">
          Petal College
        </a>
      </h1>
      <button className="nav__button">
        <FaBars />
      </button>
      <ul className="nav__list">
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
