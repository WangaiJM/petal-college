import "./Banner.scss";

const Banner = ({ title, message }) => {
  return (
    <div className="banner">
      <h2 className="banner__title">{title}</h2>
      <p className="banner__message">{message}</p>
      <a href="" className="banner__button">
        Get Started
      </a>
    </div>
  );
};
export default Banner;
