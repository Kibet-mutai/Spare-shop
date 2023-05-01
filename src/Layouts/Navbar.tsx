import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { BsHeart } from "react-icons/bs";

export const Navbar = () => {
  return (
    <>
      <div className="flex justify-around bg-black p-2">
        <div className="text-white">
          <p className="font-thin text-sm">
            Hot days! - 50% Get ready for summer!
          </p>
        </div>
        <div className="text-white text-xs">
          <h4>TAKE CARE OF YOUR TIRE 22% OFF USE CODE “ MNSKS ”</h4>
        </div>
        <div className="flex flex-row gap-x-2">
          <a href="#">
            <p className="text-white hover:text-yellow-700 text-sm">
              Store Locator |
            </p>
          </a>
          <a href="#">
            <p className="text-white hover:text-yellow-700 text-sm">
              Order Tracking |
            </p>
          </a>
          <a href="#">
            <p className="text-white hover:text-yellow-700 text-sm">FAQS</p>
          </a>
        </div>
      </div>
      <div className="flex justify-between bg-[#f7c601] p-8 items-center">
        <div className="logo-image">
          <img
            src="src/assets/Images/logo-1.png"
            className="w-36 object-cover ml-14"
            alt="logo"
          />
        </div>
        <div className="rounded-3xl bg-white flex max-w-md">
          <div className="search-bar py-2 pl-4">
            <input
              className="text-sm outline-none"
              type="search"
              name="search"
              id="search"
              placeholder="Search for products..."
            />
          </div>
          <button className="bg-black w-20 rounded-r-3xl flex justify-center items-center ">
            <FaSearch className="text-white hover:text-yellow-600" />
          </button>
        </div>
        <div className="flex flex-row gap-x-4">
          <div className="icons-items">
            <a href="#account">
              <FaUser className="w-6 h-6" />
            </a>
          </div>
          <div className="icons-items">
            <a href="#wishlist">
              <BsHeart className="w-6 h-6" />
            </a>
          </div>
          <div className="icons-items">
            <a href="#cart">
              <FaShoppingCart className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
