import { MdOutlineStar } from "react-icons/md";
import { PopularProduct } from "./PopularProduct";
import { HoverPopular } from "./HoverPopular";

export const PopularProducts = () => {
  const image = {
    url: "src/assets/Images/grid-right.jpg",
  };
  return (
    <>
      <div className="flex justify-between p-6">
        <h3 className="text-xl uppercase">Popular products</h3>
        <a href="#">
          <h3 className="text-gray-400 text-sm uppercase">All Products</h3>
        </a>
      </div>
      <div className="flex flex-row gap-x-4 p-4">
        <div className=" deals-body w-[257px] relative flex flex-col gap-y-3">
          <div className="pop-image">
            <img
              src="src/assets/Images/Image-1.jpg"
              className="w-[227px] h-[227px] object-cover"
              alt="Charging batt"
            />
            <HoverPopular />
          </div>
          <div className="uppercase font-[Inter] hover:text-[#f7c601] text-xs">
            <a href="#">Body parts</a>
          </div>
          <div className="prod-heading uppercase font-[Roboto] hover:text-[#f7c601] text-xs">
            <a href="#" className="break words">
              Hf2 gloss black with brushed face Charging
            </a>
          </div>
          <div className="flex flex-row gap-x-1">
            <div className="flex">
              <MdOutlineStar className="text-yellow-500" />
              <MdOutlineStar className="text-yellow-500" />
              <MdOutlineStar className="text-yellow-500" />
              <MdOutlineStar className="text-yellow-500" />
              <MdOutlineStar className="text-gray-300" />
            </div>
            <h1 className="uppercase font-thin text-xs">(1 review)</h1>
          </div>
          <span className="price">$200</span>
        </div>
        <div className=" deals-body w-[257px] relative flex flex-col gap-y-3">
          <div className="pop-image">
            <img
              src="src/assets/Images/Image-24.jpg"
              className="w-[227px] h-[227px] object-cover"
              alt="Charging batt"
            />
            <HoverPopular />
          </div>
          <div className="uppercase font-[Inter] hover:text-[#f7c601] text-xs">
            <a href="#">electronic parts</a>
          </div>
          <div className="prod-heading uppercase font-[Roboto] hover:text-[#f7c601] text-xs">
            <a href="#">all weather terrain braker abs/pro</a>
          </div>
          <div className="flex flex-row gap-x-1">
            <div className="flex">
              <MdOutlineStar className="text-yellow-500" />
              <MdOutlineStar className="text-yellow-500" />
              <MdOutlineStar className="text-yellow-500" />
              <MdOutlineStar className="text-yellow-500" />
              <MdOutlineStar className="text-yellow-500" />
            </div>
            <h1 className="uppercase font-thin text-xs">(1 review)</h1>
          </div>
          <span className="price">$100</span>
        </div>
        <div className="deals-body w-[257px] relative flex flex-col gap-y-3">
          <div className="pop-image">
            <img
              src="src/assets/Images/Image-23.jpg"
              className="w-[227px] h-[227px] object-cover"
              alt="Charging batt"
            />
            <HoverPopular />
          </div>
          <div className="uppercase font-[Inter] hover:text-[#f7c601] text-xs">
            <a href="#">Engine parts</a>
          </div>
          <div className="prod-heading uppercase font-[Roboto] hover:text-[#f7c601] text-xs">
            <a href="#">Castrol gtx high mileage 10w-30 synthetic blend</a>
          </div>
          <div className="flex flex-row gap-x-1">
            <div className="flex">
              <MdOutlineStar className="text-yellow-500" />
              <MdOutlineStar className="text-yellow-500" />
              <MdOutlineStar className="text-yellow-500" />
              <MdOutlineStar className="text-yellow-500" />
              <MdOutlineStar className="text-gray-300" />
            </div>
            <h1 className="uppercase font-thin text-xs">(1 review)</h1>
          </div>
          <span className="price">$200</span>
        </div>
        <div
          style={{ backgroundImage: `url(${image.url})` }}
          className="w-[479px] h-[349px] bg-cover bg-center bg-no-repeat col-span-3 hover:transition-all ease-in-out duration-300 hover:scale-y-110"
        >
          <h3 className="text-white text-2xl py-[20%] text-center break-all">
            CONTACT US TO GET 15% OFF
          </h3>
          <div className="flex justify-center">
            <button className="p-2 items-center bg-[#f7c601] rounded-3xl">
              <h3 className="uppercase">Contact us</h3>
            </button>
          </div>
        </div>
      </div>
      <PopularProduct />
    </>
  );
};
