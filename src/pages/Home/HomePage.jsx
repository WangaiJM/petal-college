import NavBar from "../../components/navbar/NavBar";
import Banner from "../../components/banner/Banner";
import WelcomeSection from "../../components/welcome/WelcomeSection";
import Card from "../../components/card/Card";
import Partners from "../../components/partners/Partners";
import Footer from "../../components/footer/Footer";

import "./HomePage.scss";

import welcomeImage from "./../../assets/images/admin_block.jpg";
import fashionImage from "./../../assets/images/fashion_design.jpg";
import tourismImage from "./../../assets/images/girls.jpg";
import ictImage from "./../../assets/images/ICT.jpg";

const HomePage = () => {
  const welcome__message = [
    "At Petal Girls Vocational Training Center, we believe in the power of education to transform lives. As a ladies-only institution attached to Petal Girls School, we are committed to providing a safe, supportive, and inspiring environment where young women can gain practical skills, confidence, and independence. ",
    "Our programs are designed to equip students with hands-on training in marketable fields, preparing them not only for employment but also for entrepreneurship and community leadership. We take pride in nurturing well-rounded individuals who are passionate, skilled, and ready to make a positive impact in the world. ",
    "Whether you are a prospective student, a parent, or a partner, we invite you to explore and discover how we’re shaping the future—one lady at a time.",
    "Karibu sana.",
  ];

  return (
    <>
      <NavBar />
      <Banner
        bannerTitle={"home"}
        title={"Nurturing Futures By God's Grace"}
        message={""}
      />
      <WelcomeSection
        title={"Welcome to Petal Girls Vocational Training Center"}
        message={welcome__message}
        image={welcomeImage}
        img_alt={"Welcome Image"}
      />

      <section className="courses">
        <div className="container">
          <h3 className="courses__subtitle">Courses</h3>
          <h2 className="courses__title">Popular Courses</h2>
          <div className="courses__card-container">
            <Card
              image={ictImage}
              img_alt={"Card 1 Image"}
              title={"ICT"}
              description={
                "Equip yourself with essential digital skills for the modern workplace. Our ICT course covers computer applications, programming, and digital literacy—empowering you to thrive in today's tech-driven world."
              }
            />
            <Card
              image={tourismImage}
              img_alt={"Card 2 Image"}
              title={"Tourism and Hospitality"}
              description={
                "Discover exciting opportunities in Kenya’s vibrant hospitality and tourism industry. This course equips you with customer service skills, front office operations, food and beverage service, and travel management essentials—preparing you for a dynamic and rewarding career."
              }
            />
            <Card
              image={fashionImage}
              img_alt={"Card 3 Image"}
              title={"Fashion and Design"}
              description={
                "Unleash your creativity and bring ideas to life through fabric and style. Our Fashion and Design course trains you in garment construction, pattern drafting, tailoring, and fashion illustration—empowering you to create, innovate, and lead in the fashion industry."
              }
            />
          </div>
        </div>
      </section>

      <Partners />
      <Footer />
    </>
  );
};
export default HomePage;
