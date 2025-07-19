import { useLocation } from "react-router";
import "./Banner.scss";

const Banner = ({ title, message }) => {
  const location = useLocation();

  return (
    <div className="banner">
      <h2 className="banner__title">{title}</h2>
      <p className="banner__message">{message}</p>

      {location.pathname === "/" && (
        <a href="" className="banner__button">
          Get Started
        </a>
      )}
    </div>
  );
};
export default Banner;
