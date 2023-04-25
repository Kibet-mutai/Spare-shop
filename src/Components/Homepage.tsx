import { useState } from "react";
import { Hover } from "../Layouts/Hover";
import { Navbar } from "../Layouts/Navbar";
import { Hero } from "../Layouts/Hero";
import { Slider } from "../Layouts/Slider";
import { Filter } from "./Filter";

export const Homepage = () => {
  const [navbar, setNavbar] = useState(false);
  const changeNavbar = () => {
    if (window.scrollY >= 110) {
      setNavbar(true);
      //console.log(window.scrollY);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeNavbar);
  return (
    <>
      {navbar ? <Hover /> : <Navbar />}
      <Hero />
      <Slider />
      <Filter />
    </>
  );
};
