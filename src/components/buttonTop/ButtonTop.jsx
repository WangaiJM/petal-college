import { useEffect, useState } from "react";

import { FaLongArrowAltUp } from "react-icons/fa";

import "./ButtonTop.scss";

const ButtonTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      window.scrollY > 100 ? setIsVisible(true) : setIsVisible(false);
    };

    window.addEventListener("scroll", toggleVisibility);
  }, []);

  const toTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div>
      {isVisible && (
        <button className="togglebtn" onClick={toTop}>
          <FaLongArrowAltUp />
        </button>
      )}
    </div>
  );
};
export default ButtonTop;
