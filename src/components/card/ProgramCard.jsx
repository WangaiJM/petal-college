import "./ProgramCard.scss";

import Logo from "./../../assets/images/logo.jpg";

const ProgramCard = ({ title, image, description, fees }) => {
  return (
    <div className="courseCard">
      <div className="courseCard__inner">
        <div className="courseCard__front">
          {image && (
            <img src={image} alt={title} className="courseCard__image" />
          )}
          <div className="courseCard__front-content">
            <h2 className="courseCard__front-title">{title}</h2>
            <p className="courseCard__front-description">{description}</p>
          </div>
          <span className="courseCard__flip-hint">Hover to see fees →</span>
        </div>

        <div className="courseCard__back">
          <div className="courseCard__back-header">
            <img
              src={Logo}
              alt="Petals Logo"
              className="courseCard__back-logo"
            />
            <h3 className="courseCard__back-title">Course Fees</h3>
          </div>

          <div className="courseCard__back-body">
            {fees.map((fee, index) => (
              <div
                key={index}
                className={`fee__item ${
                  fee.module.toLowerCase().includes("total")
                    ? "fee__item--highlight"
                    : ""
                }`}
              >
                <p className="fee__line">
                  <span className="fee__label">{fee.module}</span>
                  <span className="fee__amount">{fee.amount} KES</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;
