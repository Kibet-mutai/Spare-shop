import { useEffect, useState } from "react";
import { SecondNavbar } from "../Layouts/SecondNavbar";
import { Navbar } from "../Layouts/Navbar";
import { Hero } from "../Layouts/Hero";
import { Filter } from "./Filter";
import { BiArrowToTop } from "react-icons/bi";
import { Footer } from "../Layouts/Footer";
import { ProductsExport } from "./Products/ProductsExport";
import { AdSection } from "../Layouts/AdSection";

export const Homepage = () => {
  const [showButton, setShowButton] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const changeNavbar = () => {
    if (window.scrollY >= 110) {
      setNavbar(true);
      //console.log(window.scrollY);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  // This function will scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };
  window.addEventListener("scroll", changeNavbar);
  return (
    <>
      {navbar ? <SecondNavbar /> : <Navbar />}
      <Hero />
      <Filter />
      <ProductsExport />
      <AdSection />
      <Footer />
      {/* {showButton && (
          <div className="flex justify-end px-4 py-6 absolute bottom-10 right-0 ">
            <button
              onClick={scrollToTop}
              className="bg-blue-300 w-16 h-16 rounded-full border-yellow-500 flex justify-center items-center"
            >
              <BiArrowToTop className="h-10 w-10" />
            </button>
          </div>
        )} */}
    </>
  );
};
