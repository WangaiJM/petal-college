import NavBar from "./../../components/navbar/NavBar";
// import Banner from "./../../components/banner/Banner";
import Footer from "./../../components/footer/Footer";
import ProgramCard from "../../components/card/ProgramCard";

import "./Programs.scss";

import classImage from "./../../assets/images/classroom.jpg";
import hairdressingImage from "../../assets/images/hair_dressing.jpg";
import ictImage from "../../assets/images/ICT.jpg";
import fashionImage from "../../assets/images/fashion_design.jpg";
import hospitalityImage from "../../assets/images/girls.jpg";

const Programs = () => {
  return (
    <>
      <NavBar />
      {/* <Banner bannerTitle={"programs"} /> */}
      <div className="container">
        <div className="courseGrid">
          <ProgramCard
            title="Hairdressing and Beauty Therapy"
            image={hairdressingImage}
            description="The Hairdressing and Beauty Therapy course equips learners with practical skills in personal grooming, hair care, skincare, and beauty treatments. Offered at both Certificate and Diploma levels."
            fees={[
              { module: "Year I", amount: "15,000" },
              { module: "Lunch", amount: "9,000" },
              { module: "Total Year I", amount: "24,000" },
            ]}
          />
          <ProgramCard
            title="Information Communication Technology"
            image={ictImage}
            description="The Information and Communication Technology (ICT) course equips learners with practical skills in computer applications, programming, networking, and digital communication. Offered at both Certificate and Diploma levels."
            fees={[
              { module: "Year I", amount: "15,000" },
              { module: "Lunch", amount: "9,000" },
              { module: "Total Year I", amount: "24,000" },
            ]}
          />
          <ProgramCard
            title="Computer Packages"
            image={classImage}
            description="The Computer Packages course introduces learners to essential computer operations including word processing, spreadsheets, presentations, internet use, and basic file management. It is ideal for beginners seeking foundational digital literacy for both academic and workplace environments."
            fees={[{ module: "Total Cost", amount: "5,000" }]}
          />
          <ProgramCard
            title="Certificate in Tourism and Hospitality management"
            image={hospitalityImage}
            description="This course provides learners with foundational knowledge and practical skills in the tourism and hospitality industry. It covers areas such as travel operations, front office procedures, food and beverage service, customer care, and tour guiding. "
            fees={[
              { module: "Year I", amount: "27,000" },
              { module: "Lunch", amount: "9,000" },
              { module: "Total Cost", amount: "36,000" },
            ]}
          />
          <ProgramCard
            title="Diploma in Tourism and Hospitality management"
            image={classImage}
            description="This comprehensive program is designed to equip learners with advanced skills and knowledge in the dynamic tourism and hospitality industry. "
            fees={[
              { module: "Year I", amount: "41,000" },
              { module: "Lunch", amount: "9,000" },
              { module: "Total Cost", amount: "50,000" },
            ]}
          />
          <ProgramCard
            title="Fashion Design"
            image={fashionImage}
            description="This program is tailored to develop creative and technical skills in garment construction, textile selection, pattern drafting, fashion illustration, and design principles. "
            fees={[
              { module: "Year I", amount: "41,000" },
              { module: "Lunch", amount: "9,000" },
              { module: "Total Cost", amount: "50,000" },
            ]}
          />
        </div>
      </div>

      <Footer />
    </>
  );
};
export default Programs;
