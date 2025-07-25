import NavBar from "../../components/navbar/NavBar";
import Banner from "../../components/banner/Banner";
import WelcomeSection from "../../components/welcome/WelcomeSection";
import Footer from "../../components/footer/Footer";

import "./Donate.scss";

import welcomeImage from "./../../assets/images/donate.jpg";

const Donate = () => {
  const welcome__message = [
    "At Petal Ladies VTC, we see the dreams in their eyes—young, determined girls who long for an education but face unimaginable hardships. Many come from families struggling to afford a meal, let alone school fees. Some have lost parents, others are fighting against traditions that don’t believe in educating girls. Yet, despite it all, they hold on to hope.",
    "Every donation, no matter the amount, gives a girl a chance to stay in school, to dream bigger, to believe in herself.",
    "💖 Donate now. Change a life forever.",
    "For donations or partnerships, please reach out to us at +254 795 017 139 or +254 723 819 205 You can also email us via petalghschool@gmail.com. Your kindness today will shape a girl’s tomorrow. Thank you for believing in them.",
  ];
  return (
    <>
      <NavBar />
      <Banner />
      <WelcomeSection
        title={"Give Her a Chance—Transform a Life Today"}
        message={welcome__message}
        image={welcomeImage}
        img_alt={"Welcome Image"}
      />
      <Footer />
    </>
  );
};
export default Donate;
