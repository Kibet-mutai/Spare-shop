import { SetStateAction, useState } from "react";
import { IoRadioButtonOffSharp, IoRadioButtonOnOutline } from "react-icons/io5";
export const Slider = () => {
  const images = [
    {
      url: "src/assets/Images/car-tire-on-a-black-background-2210x1473.jpg",
    },
    {
      url: "src/assets/Images/Car.jpeg",
    },
    {
      url: "src/assets/Images/hand-mechanic-man-hold-spanner-tool-inspection-mentenance-car-service_117358-177.jpg",
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
        className="w-full h-full duration-500 bg-no-repeat bg-cover bg-center"
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
            // <input
            //   type="radio"
            //   id="slider"
            //   key={slideIndex}
            //   onClick={() => changeImage(slideIndex)}
            //   //   className="cursor-pointer bg-[#f1f1f1]"
            // />
          ))}
        </div>
      </div>
    </div>
  );
};
