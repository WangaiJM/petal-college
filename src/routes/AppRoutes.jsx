import { Routes, Route } from "react-router";

import HomePage from "../pages/Home/HomePage";
import About from "../pages/About/About";
import Contacts from "../pages/Contacts/Contacts";
import Admissions from "../pages/Admissions/Admissions";
import Gallery from "../pages/Gallery/Gallery";
import Programs from "../pages/Programs/Programs";
import Donate from "../pages/Donate/Donate";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/admissions" element={<Admissions />} />
      <Route path="/programs" element={<Programs />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/donate" element={<Donate />} />
      <Route path="/contacts" element={<Contacts />} />
    </Routes>
  );
};
export default AppRoutes;
