import { useState } from "react";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { BsHeart } from "react-icons/bs";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

export const Navbar = () => {
  const [showDropDown, setShowDropDown] = useState(false);
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
          <div className="relative py-1">
            <button
              className="py-2 px-2 border-r text-base cursor-pointer flex flex-row truncate items-center focus:outline-none"
              data-dropdown-placement="bottom"
              type="button"
              onClick={() => setShowDropDown(!showDropDown)}
            >
              <p className="text-sm hover:text-[#f7c601]">All Category</p>
              {showDropDown ? <BiChevronUp /> : <BiChevronDown />}
            </button>
            {showDropDown && (
              <div
                id="dropdownUsers"
                className="z-10 mt-1 absolute top-full left-0 bg-white rounded-lg shadow w-48"
              >
                <ul
                  className=" h-72 py-2 overflow-y-auto px-3 text-gray-700"
                  aria-labelledby="dropdownUsersButton"
                >
                  <li>
                    <a
                      href="#"
                      className="category-links flex items-center px-4 py-2 hover:text-[#f7c601] border-b"
                    >
                      All Categories
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="category-links flex items-center px-4 py-2 hover:text-[#f7c601] border-b"
                    >
                      Body Parts
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="category-links flex items-center px-4 py-2 hover:text-[#f7c601] border-b"
                    >
                      Electronic Parts
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="category-links flex items-center px-4 py-2 hover:text-[#f7c601] border-b"
                    >
                      Engine Parts
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="category-links flex items-center px-4 py-2 hover:text-[#f7c601] border-b"
                    >
                      Brake Disks & Pads
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="category-links flex items-center px-4 py-2 hover:text-[#f7c601] border-b"
                    >
                      Suspension Parts
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="category-links flex items-center px-4 py-2 hover:text-[#f7c601] border-b"
                    >
                      Exteriors
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="category-links flex items-center px-4 py-2 hover:text-[#f7c601] border-b"
                    >
                      Lighting parts
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="category-links flex items-center px-4 py-2 hover:text-[#f7c601] border-b"
                    >
                      Oil & Lubricants
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="category-links flex items-center px-4 py-2 hover:text-[#f7c601] border-b"
                    >
                      Energy Parts
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="category-links flex items-center px-4 py-2 hover:text-[#f7c601] border-b"
                    >
                      Wheels And Tires
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="category-links flex items-center px-4 py-2 hover:text-[#f7c601] border-b"
                    >
                      Steering Parts
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
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
