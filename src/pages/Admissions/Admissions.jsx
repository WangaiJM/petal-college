import NavBar from "./../../components/navbar/NavBar";
import Banner from "./../../components/banner/Banner";
import Footer from "./../../components/footer/Footer";

import {
  MdCalendarToday,
  MdSchool,
  MdHowToReg,
  MdPayment,
  MdContactPhone,
} from "react-icons/md";
import { AiOutlineFileText } from "react-icons/ai";

import "./Admissions.scss";

const Admissions = () => {
  return (
    <div>
      <NavBar />
      <Banner bannerTitle={"admissions"} />
      <main className="admissions">
        <section className="admissions__section">
          <h2>Welcome to Admissions</h2>
          <p>
            At Petal Ladies Vocational Training Center, we welcome applications
            from young women eager to gain practical skills and build a brighter
            future. Our programs are open to KCPE and KCSE graduates depending
            on the course level.
          </p>
        </section>

        <section className="admissions__section">
          <h3>
            <MdCalendarToday /> Available Intakes
          </h3>
          <ul>
            <li>January Intake</li>
            <li>May Intake</li>
            <li>September Intake</li>
            <li>Late admissions may be considered based on availability</li>
          </ul>
        </section>

        <section className="admissions__section">
          <h3>
            <MdSchool /> Admission Requirements
          </h3>
          <ul>
            <li>
              <strong>Artisan Courses:</strong> KCPE Certificate, female, age
              15+
            </li>
            <li>
              <strong>Craft/Certificate Courses:</strong> KCSE D plain and above
            </li>
            <li>
              <strong>Diploma Courses:</strong> KCSE C- and above or relevant
              craft certificate
            </li>
          </ul>
        </section>

        <section className="admissions__section">
          <h3>
            <MdHowToReg /> How to Apply
          </h3>
          <ol>
            <li>Visit college or download the application form</li>
            <li>
              Submit completed form with:
              <ul>
                <li>Copy of KCPE/KCSE certificate</li>
                <li>Two passport-size photos</li>
                <li>Copy of birth certificate or ID</li>
              </ul>
            </li>
            <li>Pay KES 500 non-refundable application fee</li>
            <li>Receive admission letter after verification</li>
          </ol>
        </section>

        <section className="admissions__section">
          <h3>
            <MdPayment /> Course Fees
          </h3>
          <p>
            Course-specific fees are listed on each program card. Payment plans
            are available. Lunch is offered at a subsidized rate.
          </p>
        </section>

        <section className="admissions__section admissions__contact">
          <h3>
            <AiOutlineFileText /> Contact Admissions
          </h3>
          <p>
            <MdContactPhone /> <strong>Phone:</strong> +254 795 017139
          </p>
          <p>
            <AiOutlineFileText /> <strong>Email:</strong>{" "}
            admissions@petalgirls.ac.ke
          </p>
          <p>
            <MdSchool /> <strong>Visit:</strong> Located at Mirera Airstrip,
            next to Petal Girls School, Naivasha
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Admissions;
