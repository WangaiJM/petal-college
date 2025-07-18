import NavBar from "../../components/navbar/NavBar";
import Banner from "../../components/banner/Banner";
import WelcomeSection from "../../components/welcome/WelcomeSection";
import Card from "../../components/Card/Card";

import "./HomePage.scss";

import welcomeImage from "./../../assets/images/agri.jpg";
import donateImage from "./../../assets/images/donate.jpg";
import gamesImage from "./../../assets/images/games.jpg";
import Footer from "../../components/footer/Footer";

const HomePage = () => {
  const welcome__message = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dignissim sit amet sem ac fermentum. Nullam viverra cursus mauris, non porta erat congue ac. Sed arcu massa, sagittis non ante in, sagittis malesuada lorem. Sed pellentesque ullamcorper cursus. ",
    "Maecenas iaculis faucibus mauris, et ornare tortor. Integer dignissim sit amet sem ac fermentum. Nullam viverra cursus mauris, non porta erat congue ac. Fusce porttitor pellentesque ex dapibus venenatis. ",
  ];

  return (
    <>
      <NavBar />
      <Banner title={"Welcome"} message={"Learning Today, Leading Tomorrow"} />
      <WelcomeSection
        title={"Welcome to Petal College"}
        message={welcome__message}
        image={welcomeImage}
        img_alt={"Welcome Image"}
      />
      {/* Courses Section */}
      <section className="courses">
        <div className="container">
          <h3 className="courses__subtitle">Courses</h3>
          <h2 className="courses__title">Popular Courses</h2>
          <div className="courses__card-container">
            <Card
              image={welcomeImage}
              img_alt={"Card 1 Image"}
              title={"Web Development"}
              description={
                "Et architecto provident deleniti facere repellat nobis iste."
              }
            />
            <Card
              image={donateImage}
              img_alt={"Card 2 Image"}
              title={"Hospitality"}
              description={
                "Et architecto provident deleniti facere repellat nobis iste.  "
              }
            />
            <Card
              image={gamesImage}
              img_alt={"Card 3 Image"}
              title={"Physical Education"}
              description={
                " Id facere quia quae dolores dolorem tempore.Et architecto provident deleniti facere repellat nobis iste."
              }
            />
          </div>
        </div>
      </section>
      {/* End Courses Section */}
      <Footer />
    </>
  );
};
export default HomePage;
