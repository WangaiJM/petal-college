import NavBar from "../../components/navbar/NavBar";
import Banner from "../../components/banner/Banner";
import WelcomeSection from "../../components/welcome/WelcomeSection";
import Footer from "../../components/footer/Footer";

import welcomeImage from "./../../assets/images/donate.jpg";

const About = () => {
  const welcome__message = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dignissim sit amet sem ac fermentum. Nullam viverra cursus mauris, non porta erat congue ac. Sed arcu massa, sagittis non ante in, sagittis malesuada lorem. Sed pellentesque ullamcorper cursus. ",
    "Maecenas iaculis faucibus mauris, et ornare tortor. Integer dignissim sit amet sem ac fermentum. Nullam viverra cursus mauris, non porta erat congue ac. Fusce porttitor pellentesque ex dapibus venenatis. ",
  ];
  return (
    <div>
      <NavBar />
      <Banner title={"About Us"} message={"A center of excellence"} />
      <WelcomeSection
        title={"Welcome to Petal College"}
        message={welcome__message}
        image={welcomeImage}
        img_alt={"Welcome Image"}
      />
      <Footer />
    </div>
  );
};
export default About;
