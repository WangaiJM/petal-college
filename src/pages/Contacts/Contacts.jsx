import NavBar from "./../../components/navbar/NavBar";
import Footer from "./../../components/footer/Footer";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

import "./Contacts.scss";

const Contacts = () => {
  return (
    <div>
      <NavBar />
      <div className="banner">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3527.1142323527056!2d36.43433177435821!3d-0.798117335286151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182925d70a2afc71%3A0xa189939d7b8b4ed8!2sPETAL%20GIRLS%20HIGH%20SCHOOL!5e1!3m2!1sen!2ske!4v1742299290072!5m2!1sen!2ske"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Petal Ladies VTC Map"
        ></iframe>
      </div>
      <main>
        <div className="container">
          <section className="contact">
            <div className="contact__form">
              <h2>Contact Us</h2>
              <form>
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <textarea
                  rows="5"
                  placeholder="Your Message"
                  required
                ></textarea>
                <button type="submit">Send Message</button>
              </form>
            </div>

            <div className="contact__info">
              <h2>Get in Touch</h2>
              <div className="contact__info-item">
                <FaPhoneAlt /> <span>+254 795 017139</span>
              </div>
              <div className="contact__info-item">
                <FaEnvelope /> <span>petalvtc@gmail.com</span>
              </div>
              <div className="contact__info-item">
                <FaMapMarkerAlt /> <span>Naivasha, Kenya</span>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default Contacts;
