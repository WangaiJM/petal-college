import ButtonTop from "../buttonTop/ButtonTop";

import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

import "./Footer.scss";
const Footer = () => {
  return (
    <div className="footer">
      <h2 className="footer__title">Petal Ladies Vocational Training Center</h2>
      <div className="container">
        <div className="footer__info">
          <div className="footer__address">
            <p>P.O Box 659 - 20117 </p>
            <p>Naivasha, Kenya</p>
          </div>
          <div className="footer__contacts">
            <p>
              <strong>Phone: </strong>+254 795 017139
            </p>
            <p>
              <strong>Email: </strong>petalvtc@gmail.com
            </p>
          </div>
        </div>
        <div className="footer__links">
          <h2 className="footer__links-title">Useful Links</h2>
          <ul className="footer__items">
            <li className="footer__item">
              <a href="/About">About Us</a>
            </li>
            <li className="footer__item">
              <a href="/Admissions">Admissions</a>
            </li>
            <li className="footer__item">
              <a href="/programs">Our Courses</a>
            </li>
          </ul>
        </div>
        <div className="footer__dept">
          <h2 className="footer__dept-title">Departments</h2>
          <ul className="footer__items">
            <li className="footer__item">
              <a href="">ICT</a>
            </li>
            <li className="footer__item">
              <a href="">Business</a>
            </li>
            <li className="footer__item">
              <a href="">Technical</a>
            </li>
          </ul>
        </div>
        <div className="footer__socials">
          <h2 className="footer__socials-title">Socials</h2>
          <ul className="footer__socials-items">
            <li className="footer__socials-item">
              <a href="">
                <FaFacebookF />
              </a>
            </li>
            <li className="footer__socials-item">
              <a href="">
                <FaTwitter />
              </a>
            </li>
            <li className="footer__socials-item">
              <a href="">
                <FaInstagram />
              </a>
            </li>
            <li className="footer__socials-item">
              <a href="">
                <FaYoutube />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__copyright">
        <p>Copyright &copy; {new Date().getFullYear()}</p>
      </div>
      <ButtonTop />
    </div>
  );
};
export default Footer;
