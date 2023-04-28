import { useState, useEffect } from "react";
import { MdOutlineStar, MdOutlineStarPurple500 } from "react-icons/md";

const ProductDeals = () => {
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    const difference = +new Date(`${year}-12-1`) - +new Date();
    let timeLeft: { [key: string]: any } = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
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

  const timerComponents: string[] = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(<span>{timeLeft[interval]}</span>);
  });
  return (
    <>
      <h1 className="uppercase mt-20 ml-8 text-3xl font-bold">
        Hot Deal Products
      </h1>
      <div className="grid grid-cols-8 p-8 gap-x-8">
        <div className="col-span-4 p-[55px] h-96 flex border border-yellow-300 relative cursor-pointer">
          <img
            src="src/assets/Images/Image-26.jpg"
            className="h-60 w-60 object-cover"
            alt="product-image"
          />
          <div className="absolute top-[60px] left-20 bg-red-500 flex items-center">
            <p className="text-white">-20%</p>
          </div>
          <div className="flex flex-col ml-8 gap-y-5">
            <h1 className="uppercase">Body Parts</h1>
            <h3 className="uppercase text-sm">
              Combo sports stereos for coupe models
            </h3>
            <div className="flex flex-row gap-x-3">
              <div className="flex">
                <MdOutlineStarPurple500 className="text-gray-200" />
                <MdOutlineStarPurple500 className="text-gray-200" />
                <MdOutlineStarPurple500 className="text-gray-200" />
                <MdOutlineStarPurple500 className="text-gray-200" />
                <MdOutlineStarPurple500 className="text-gray-200" />
              </div>
              <h1 className="text-sm uppercase font-thin">(0 reviews)</h1>
            </div>
            <div className="flex flex-row gap-x-4">
              <span>$120</span>
              <span className="text-gray-400 line-through">$150</span>
            </div>
            <div className="mt-3">
              <div className="flex text-red-500 flex-row gap-x-12">
                {timerComponents.length ? (
                  timerComponents
                ) : (
                  <span>Time's up!</span>
                )}
              </div>
              <div className="flex flex-row gap-x-8">
                <h3 className="text-xs uppercase">Days</h3>
                <h3 className="text-xs uppercase">hours</h3>
                <h3 className="text-xs uppercase">mins</h3>
                <h3 className="text-xs uppercase">Sec</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-4 p-[55px] h-96 flex border border-yellow-300 relative">
          <img
            src="src/assets/Images/Image-17.jpg"
            className=" w-60 h-60 object-cover"
            alt="product-image"
          />
          <div className="absolute top-[60px] left-20 bg-red-500 flex items-center">
            <p className="text-white">-30%</p>
          </div>
          <div className="flex flex-col gap-y-5 ml-8">
            <h1 className="uppercase">Energy Parts</h1>
            <h3 className="uppercase text-sm">
              Season maintainance kit (with indoor filter)
            </h3>
            <div className="flex flex-row gap-x-3">
              <div className="flex">
                <MdOutlineStar className="text-yellow-500" />
                <MdOutlineStar className="text-yellow-500" />
                <MdOutlineStar className="text-yellow-500" />
                <MdOutlineStar className="text-yellow-500" />
                <MdOutlineStar className="text-yellow-500" />
              </div>
              <h1 className="text-sm uppercase font-thin">(1 review)</h1>
            </div>
            <div className="flex flex-row gap-x-4">
              <span>$120</span>
              <span className="text-gray-400 line-through">$150</span>
            </div>
            <div className="mt-3">
              <div className="flex text-red-500 flex-row gap-x-12">
                {timerComponents.length ? (
                  timerComponents
                ) : (
                  <span>Time's up!</span>
                )}
              </div>
              <div className="flex flex-row gap-x-8">
                <h3 className="text-xs uppercase">Days</h3>
                <h3 className="text-xs uppercase">hours</h3>
                <h3 className="text-xs uppercase">mins</h3>
                <h3 className="text-xs uppercase">Sec</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDeals;
