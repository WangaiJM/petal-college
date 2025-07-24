import NavBar from "../../components/navbar/NavBar";
import Banner from "../../components/banner/Banner";
import WelcomeSection from "../../components/welcome/WelcomeSection";
import Footer from "../../components/footer/Footer";

import welcomeImage from "./../../assets/images/logo.jpg";

import "./About.scss";

const About = () => {
  const welcome__message = [
    "Petal Girls Vocational Training Center (PLVTC) is a girls-only institution dedicated to equipping young women with practical, market-ready skills through the TVET (Technical and Vocational Education and Training) system. We have fully embraced the Competency-Based Education and Training (CBET) approach to ensure our trainees are empowered with hands-on experience, critical thinking, and 21st-century workplace skills.",
    "Our CBET model ensures that every learner is assessed through real-world tasks, supported in their individual learning journey, and prepared for both employment and entrepreneurship. We believe in learning by doing—nurturing creativity, resilience, and independence in every trainee.",
    "With modern facilities and a dedicated team of trainers, we aim to develop competent, confident, and value-driven graduates who are ready to contribute meaningfully to their families, communities, and the economy.",
  ];
  return (
    <div>
      <NavBar />
      <Banner title={"About Us"} message={"A center of excellence"} />
      <WelcomeSection
        title={"Petal Ladies VTC"}
        message={welcome__message}
        image={welcomeImage}
        img_alt={"Welcome Image"}
      />
      <div className="container">
        <article className="mission">
          <div className="mission__card">
            <h2 className="mission__card-title">Mission</h2>
            <p>
              To nurture and empower girls through quality, well-rounded
              education in a safe and supportive setting, equipping them to lead
              with integrity and contribute meaningfully to their families and
              communities.
            </p>
          </div>
          <div className="mission__card">
            <h2 className="mission__card-title">Vision</h2>
            <p>
              To be a centre of excellence in educating and empowering girls in
              need through transformative,holistic learning.
            </p>
          </div>
        </article>
      </div>
      <Footer />
    </div>
  );
};
export default About;
