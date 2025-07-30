import NavBar from "./../../components/navbar/NavBar";
import Banner from "./../../components/banner/Banner";
import Footer from "./../../components/footer/Footer";

import "./Gallery.scss";

const Gallery = () => {
  return (
    <div>
      <NavBar />
      <Banner bannerTitle={"gallery"} />
      <Footer />
    </div>
  );
};
export default Gallery;
