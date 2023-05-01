import { BsEye, BsHeart } from "react-icons/bs";
import { TbArrowsLeftRight } from "react-icons/tb";
export const HoverItems = () => {
  return (
    <>
      <div className=" hidden p-4 absolute bottom-48 -translate-x-2/6 left-1/3 hover-text-one">
        <div className="bg-orange-300 rounded-full p-1 items-center mb-2">
          <BsHeart />
        </div>
        <div className="bg-orange-300 rounded-full p-1 items-center mb-2">
          <TbArrowsLeftRight />
        </div>
        <div className="bg-orange-300 rounded-full p-1 items-center">
          <BsEye />
        </div>
      </div>
      <div className=" hidden absolute right-56 top-48 hover-text-two">
        <button
          className="p-2 items-center bg-[#f7c601] text-black rounded-3xl hover:bg-black"
          id="btn-offer"
        >
          <h3 className="uppercase text-sm offer-text">Add cart</h3>
        </button>
      </div>
    </>
  );
};
