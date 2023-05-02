import { MdOutlineStar } from "react-icons/md";
import { HoverPopular } from "./HoverPopular";

export const PopularProduct = () => {
  return (
    <div className="flex flex-row gap-x-4 p-4">
      <div className=" deals-body w-[257px] relative flex flex-col gap-y-3">
        <div className="pop-image">
          <img
            src="src/assets/Images/Image-2.jpg"
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
            src="src/assets/Images/Image-14.jpg"
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
            src="src/assets/Images/Image-17.jpg"
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
            src="src/assets/Images/Image-18.jpg"
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
      <div className=" deals-body w-[257px] flex flex-col gap-y-3 relative">
        <div className="pop-image">
          <img
            src="src/assets/Images/Image-19.jpg"
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
    </div>
  );
};
