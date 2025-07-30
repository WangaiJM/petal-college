import "./WelcomeSection.scss";

const WelcomeSection = ({ title, message, image, img_alt }) => {
  return (
    <div className="welcome">
      <div className="container">
        <div className="welcome__content">
          <h2 className="welcome__title">{title}</h2>
          <div className="welcome__message">
            {Array.isArray(message) ? (
              message.map((para, index) => <p key={index}>{para}</p>)
            ) : (
              <p>{message}</p>
            )}
          </div>
        </div>
        <div className="welcome__image">
          <img src={image} alt={img_alt} />
        </div>
      </div>
    </div>
  );
};
export default WelcomeSection;
