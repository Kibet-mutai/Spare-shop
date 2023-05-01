import { SetStateAction, useEffect, useState } from "react";
import { IoRadioButtonOffSharp, IoRadioButtonOnOutline } from "react-icons/io5";
export const Slider = () => {
  const images = [
    {
      url: "src/assets/Images/slider-1.jpg",
    },
  ];

  // const [currentImage, setCurrentImage] = useState(0);

  // const changeImage = (slideImage: SetStateAction<number>) => {
  //   setCurrentImage(slideImage);
  // };
  // const [activeSlide, setActiveSlide] = useState(1);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setActiveSlide(activeSlide === images.length ? 1 : activeSlide + 1);
  //   }, 12000);

  //   return () => clearInterval(interval);
  // }, [activeSlide]);

  return <div className="relative max-w-[1440px] h-[450px] m-auto"></div>;
};
