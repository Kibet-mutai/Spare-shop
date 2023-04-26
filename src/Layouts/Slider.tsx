import { SetStateAction, useEffect, useState } from "react";
import { IoRadioButtonOffSharp, IoRadioButtonOnOutline } from "react-icons/io5";
export const Slider = () => {
  const images = [
    {
      id: 1,
      url: "src/assets/Images/car-tire-on-a-black-background-2210x1473.jpg",
      description: "Variety of New Tires for Every Vehicle",
      btn: "Apply now",
    },
    {
      id: 2,
      url: "src/assets/Images/Car.jpeg",
      description: "Body Parts for Any Vehicle",
      btn: "Apply now",
    },
    {
      id: 3,
      url: "src/assets/Images/hand-mechanic-man-hold-spanner-tool-inspection-mentenance-car-service_117358-177.jpg",
      description: "Provide Tools Suitable for All Car Models",
      btn: "Apply now",
    },
  ];

  const [currentImage, setCurrentImage] = useState(0);

  const changeImage = (slideImage: SetStateAction<number>) => {
    setCurrentImage(slideImage);
  };
  const [activeSlide, setActiveSlide] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide(activeSlide === images.length ? 1 : activeSlide + 1);
    }, 12000);

    return () => clearInterval(interval);
  }, [activeSlide]);

  return (
    <div className="relative max-w-[1440px] h-[450px] m-auto">
      {images.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === activeSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.url}
            className="w-full h-full duration-500 ease-in-out bg-no-repeat bg-cover bg-center object-cover"
          />
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-white bg-black bg-opacity-50 px-4 py-2 rounded-md whitespace-nowrap">
            {slide.description.split("").map((char, index) => (
              <span
                key={`${slide.id}-char-${index}`}
                className={`inline-block opacity-0 text-red-600 ${
                  index === 0 ? "animate-typing" : ""
                }`}
                style={{ animationDelay: `${(index + 1) * 50}ms` }}
              >
                {char}
              </span>
            ))}
          </div>
          <div className="flex items-center flex-row gap-x-2 absolute left-[50%] bottom-2 -translate-x-1/2">
            {images.map((_slide, slideIndex) => (
              <div
                id="slider"
                key={slideIndex}
                onClick={() => changeImage(slideIndex)}
                className="text-white"
              >
                {!currentImage ? (
                  <IoRadioButtonOffSharp />
                ) : (
                  <IoRadioButtonOnOutline />
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
