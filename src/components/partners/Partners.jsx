import "./Partners.scss";

import gdgLogo from "./../../assets/images/gdg_logo.png";
import petalsImage from "./../../assets/images/petal_logo.jpg";
import armsLogo from "./../../assets/images/arms.png";

const Partners = () => {
  const logos = [
    { src: petalsImage, alt: "Petals Logo" },
    { src: gdgLogo, alt: "GDG Logo" },
    { src: armsLogo, alt: "ARMS Logo" },
  ];

  return (
    <section className="partners">
      <h2 className="partners__title">Our Partners</h2>
      <div className="partners__grid">
        {logos.map((logo, index) => (
          <div className="partners__logo-box" key={index}>
            <img src={logo.src} alt={logo.alt} className="partners__logo" />
          </div>
        ))}
      </div>
      <div className="center">
        <p>
          <strong>Barbara Dougan Foundation</strong>
          <strong>Barry Topple Family</strong>
        </p>
      </div>
    </section>
  );
};

export default Partners;
