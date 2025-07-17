import { Routes, Route } from "react-router";

import HomePage from "../pages/Home/HomePage";
import About from "../pages/About/About";
import Contacts from "../pages/Contacts/Contacts";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/contacts" element={<Contacts />} />
    </Routes>
  );
};
export default AppRoutes;
