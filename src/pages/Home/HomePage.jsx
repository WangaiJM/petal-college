import NavBar from "../../components/navbar/NavBar";
import Banner from "../../components/banner/Banner";
import WelcomeSection from "../../components/welcome/WelcomeSection";

import "./HomePage.scss";

import welcomeImage from "./../../assets/images/agri.jpg";
const HomePage = () => {
  const paragraphs = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dignissim sit amet sem ac fermentum. Nullam viverra cursus mauris, non porta erat congue ac. Sed arcu massa, sagittis non ante in, sagittis malesuada lorem. Sed pellentesque ullamcorper cursus. ",
    "Maecenas iaculis faucibus mauris, et ornare tortor. Integer dignissim sit amet sem ac fermentum. Nullam viverra cursus mauris, non porta erat congue ac. Fusce porttitor pellentesque ex dapibus venenatis. ",
  ];

  return (
    <>
      <NavBar />
      <Banner title={"Welcome"} message={"Learning Today, Leading Tomorrow"} />
      <WelcomeSection
        title={"Welcome to Petal College"}
        message={paragraphs}
        image={welcomeImage}
        img_alt={"Welcome Image"}
      />
    </>
  );
};
export default HomePage;
