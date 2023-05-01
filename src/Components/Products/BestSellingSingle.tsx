import { MdOutlineStarPurple500 } from "react-icons/md";

export const BestSellingSingle = () => {
  return (
    <div className="w-full overflow-x-scroll scroll-smooth whitespace-nowrap flex p-8">
      <div className="flex flex-col w-[-256px] h-[450px]">
        <div className="product-image">
          <img
            src="src/assets/Images/product1.jpg"
            alt="product1"
            className="w-56 h-56"
          />
        </div>
        <div className="heading">
          <a href="#" className="uppercase">
            Electronic parts
          </a>
        </div>
        <div className="link-text">
          <a href="#" className="uppercase">
            series 1200 w 40 ah agm audio power battery
          </a>
        </div>
        <div className="flex">
          <MdOutlineStarPurple500 className="text-gray-200" />
          <MdOutlineStarPurple500 className="text-gray-200" />
          <MdOutlineStarPurple500 className="text-gray-200" />
          <MdOutlineStarPurple500 className="text-gray-200" />
          <MdOutlineStarPurple500 className="text-gray-200" />
        </div>
        <span className="price">$150.00</span>
      </div>
    </div>
  );
};
