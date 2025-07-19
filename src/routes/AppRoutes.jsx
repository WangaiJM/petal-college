import { Routes, Route } from "react-router";

import HomePage from "../pages/Home/HomePage";
import About from "../pages/About/About";
import Contacts from "../pages/Contacts/Contacts";
import Admissions from "../pages/Admissions/Admissions";
import Gallery from "../pages/Gallery/Gallery";
import Programs from "../pages/Programs/Programs";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/admissions" element={<Admissions />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/programs" element={<Programs />} />
    </Routes>
  );
};
export default AppRoutes;
