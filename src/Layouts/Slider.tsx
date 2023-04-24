import { SetStateAction, useState } from "react";
import { IoRadioButtonOffSharp, IoRadioButtonOnOutline } from "react-icons/io5";
export const Slider = () => {
  const images = [
    {
      url: "src/assets/Images/car-tire-on-a-black-background-2210x1473.jpg",
      description: "Variety of New Tires for Every Vehicle",
      btn: "Apply now",
    },
    {
      url: "src/assets/Images/Car.jpeg",
      description: "Body Parts for Any Vehicle",
      btn: "Apply now",
    },
    {
      url: "src/assets/Images/hand-mechanic-man-hold-spanner-tool-inspection-mentenance-car-service_117358-177.jpg",
      description: "Provide Tools Suitable for All Car Models",
      btn: "Apply now",
    },
  ];

  const [currentImage, setCurrentImage] = useState(0);

  const changeImage = (slideImage: SetStateAction<number>) => {
    setCurrentImage(slideImage);
  };

  return (
    <div className="relative max-w-[1440px] h-[450px] m-auto">
      <div
        style={{ backgroundImage: `url(${images[currentImage].url})` }}
        className="w-full h-full duration-500 ease-in-out bg-no-repeat bg-cover bg-center"
      >
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
    </div>
  );
};
