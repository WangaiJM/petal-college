import { useLocation } from "react-router";
import "./Banner.scss";

const Banner = ({ bannerTitle, title, message }) => {
  const location = useLocation();

  return (
    <div className={`banner banner-${bannerTitle}`}>
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
