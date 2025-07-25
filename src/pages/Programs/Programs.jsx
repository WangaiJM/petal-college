import NavBar from "./../../components/navbar/NavBar";
import Banner from "./../../components/banner/Banner";
import Footer from "./../../components/footer/Footer";
import Card from "../../components/Card/Card";

import "./Programs.scss";

import fashionImage from "./../../assets/images/fashion_design.jpg";
import tourismImage from "./../../assets/images/girls.jpg";
import ictImage from "./../../assets/images/ICT.jpg";

const Programs = () => {
  return (
    <>
      <NavBar />
      <Banner />
      <section className="courses">
        <div className="container">
          <h3 className="courses__subtitle">Courses</h3>
          <h2 className="courses__title">OUr Courses</h2>
          <div className="courses__card-program">
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
            <Card
              image={fashionImage}
              img_alt={"Card 3 Image"}
              title={"Fashion and Design"}
              description={
                "Unleash your creativity and bring ideas to life through fabric and style. Our Fashion and Design course trains you in garment construction, pattern drafting, tailoring, and fashion illustration—empowering you to create, innovate, and lead in the fashion industry."
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
            <Card
              image={fashionImage}
              img_alt={"Card 3 Image"}
              title={"Fashion and Design"}
              description={
                "Unleash your creativity and bring ideas to life through fabric and style. Our Fashion and Design course trains you in garment construction, pattern drafting, tailoring, and fashion illustration—empowering you to create, innovate, and lead in the fashion industry."
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
            <Card
              image={fashionImage}
              img_alt={"Card 3 Image"}
              title={"Fashion and Design"}
              description={
                "Unleash your creativity and bring ideas to life through fabric and style. Our Fashion and Design course trains you in garment construction, pattern drafting, tailoring, and fashion illustration—empowering you to create, innovate, and lead in the fashion industry."
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
      <Footer />
    </>
  );
};
export default Programs;
