import {
  useState,
  useEffect,
  JSXElementConstructor,
  ReactElement,
  ReactFragment,
} from "react";
import { MdOutlineStarOutline } from "react-icons/md";

const ProductDeals = () => {
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    const difference = +new Date(`${year}-10-1`) - +new Date();
    let timeLeft: {} = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [year] = useState(new Date().getFullYear());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents: [] = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(<span>{timeLeft[interval]}</span>);
  });
  return (
    <>
      <h1 className="uppercase my-10 ml-8">Hot Deal Products</h1>
      <div className="grid grid-cols-6 p-8 gap-x-12">
        <div className="col-span-3 p-16 flex border border-yellow-300 relative">
          <div className="p-4">
            <img
              src="src/assets/Images/Image-26.jpg"
              className=" w-72 h-72 object-cover"
              alt="product-image"
            />
          </div>
          <div className="absolute top-[60px] left-20 bg-red-500 flex items-center">
            <p className="text-white">-20%</p>
          </div>
          <div className="flex flex-col gap-y-6 px-10">
            <h1 className="uppercase">Body Parts</h1>
            <h3 className="uppercase">Combo sports stereos for coupe models</h3>
            <div className="flex flex-row gap-x-3">
              <div className="flex">
                <MdOutlineStarOutline className="text-gray-500" />
                <MdOutlineStarOutline className="text-gray-500" />
                <MdOutlineStarOutline className="text-gray-500" />
                <MdOutlineStarOutline className="text-gray-500" />
                <MdOutlineStarOutline className="text-gray-500" />
                <MdOutlineStarOutline className="text-gray-500" />
              </div>
              <h1 className="text-sm uppercase font-thin">(0 reviews)</h1>
            </div>
            <div className="flex flex-row gap-x-4 mt-4">
              <span>$120</span>
              <span className="text-gray-400 line-through">$150</span>
            </div>
            <div className="mt-10 flex text-red-500 flex-row gap-x-16">
              {timerComponents.length ? (
                timerComponents
              ) : (
                <span>Time's up!</span>
              )}
            </div>
            <div className="flex flex-row gap-x-9">
              <h3 className="uppercase">Days</h3>
              <h3 className="uppercase">hours</h3>
              <h3 className="uppercase">mins</h3>
              <h3 className="uppercase">Sec</h3>
            </div>
          </div>
        </div>
        <div className="col-span-3 p-16 flex border border-yellow-300 relative">
          <div className="p-4">
            <img
              src="src/assets/Images/Image-17.jpg"
              className=" w-72 h-72 object-cover"
              alt="product-image"
            />
          </div>
          <div className="absolute top-[60px] left-20 bg-red-500 flex items-center">
            <p className="text-white">-30%</p>
          </div>
          <div className="flex flex-col gap-y-6 px-10">
            <h1 className="uppercase">Energy Parts</h1>
            <h3 className="uppercase">
              Season maintainance kit (with indoor filter)
            </h3>
            <div className="flex flex-row gap-x-3">
              <div className="flex">
                <MdOutlineStarOutline className="text-yellow-500" />
                <MdOutlineStarOutline className="text-yellow-500" />
                <MdOutlineStarOutline className="text-yellow-500" />
                <MdOutlineStarOutline className="text-yellow-500" />
                <MdOutlineStarOutline className="text-yellow-500" />
                <MdOutlineStarOutline className="text-yellow-500" />
              </div>
              <h1 className="text-sm uppercase font-thin">(1 reviews)</h1>
            </div>
            <div className="flex flex-row gap-x-4 mt-4">
              <span>$120</span>
              <span className="text-gray-400 line-through">$150</span>
            </div>
            <div className="mt-10 flex text-red-500 flex-row gap-x-16">
              {timerComponents.length ? (
                timerComponents
              ) : (
                <span>Time's up!</span>
              )}
            </div>
            <div className="flex flex-row gap-x-9">
              <h3 className="uppercase">Days</h3>
              <h3 className="uppercase">hours</h3>
              <h3 className="uppercase">mins</h3>
              <h3 className="uppercase">Sec</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDeals;
