import { BiChevronDown, BiChevronUp, BiPlus } from "react-icons/bi";
import { CgMenuLeftAlt } from "react-icons/cg";
import { FaCar, FaCarBattery } from "react-icons/fa";
import {
  GiCarWheel,
  GiElectricalSocket,
  GiSteeringWheel,
} from "react-icons/gi";
import { MdEngineering } from "react-icons/md";
import { RiOilFill } from "react-icons/ri";
import { useState } from "react";
export const Hero = () => {
  const [showItems, setShowItems] = useState(false);
  return (
    <>
      <div className="flex justify-between ml-8 mr-4">
        <div className="relative">
          <button
            className="bg-black font-extrabold px-4 py-2 flex items-center"
            onClick={() => setShowItems(!showItems)}
          >
            <div className="text-white mr-2">
              <CgMenuLeftAlt />
            </div>
            <span className="text-white span-text uppercase mt-1">
              Browse All Categories
            </span>
            <div className="text-white ml-4">
              {showItems ? <BiChevronUp /> : <BiChevronDown />}
            </div>
          </button>
          {showItems && (
            <div className="absolute left-0 right-0 z-10 bg-white">
              <ul className="px-4 py-2 border-[#f7c601] border-x-2 border-b-2">
                <li>
                  <a
                    href="#"
                    className="flex items-center px-4 py-2 border-b hover:text-[#f7c601]"
                  >
                    <MdEngineering className="mr-3 w-8 h-8" />
                    <h2 className="drop-text">Engine Parts</h2>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center px-4 py-2 border-b hover:text-[#f7c601]"
                  >
                    <GiCarWheel className="mr-3 w-8 h-8" />
                    <h2 className="drop-text">Wheels and Tires Parts</h2>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center px-4 py-2 border-b hover:text-[#f7c601]"
                  >
                    <GiElectricalSocket className="mr-3 w-8 h-8" />
                    <h2 className="drop-text">Electronics Parts</h2>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center px-4 py-2 border-b hover:text-[#f7c601]"
                  >
                    <GiSteeringWheel className="mr-3 w-8 h-8" />
                    <h2 className="drop-text">Steering Parts</h2>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center px-4 py-2 border-b hover:text-[#f7c601]"
                  >
                    <FaCar className="mr-3 w-8 h-8" />
                    <h2 className="drop-text">Body Parts</h2>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center px-4 py-2 border-b hover:text-[#f7c601]"
                  >
                    <RiOilFill className="mr-3 w-8 h-8" />
                    <h2 className="drop-text">Oil and Lubricants</h2>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center px-4 py-2 border-b hover:text-[#f7c601]"
                  >
                    <FaCarBattery className="mr-3 w-8 h-8" />
                    <h2 className="drop-text">Energy Parts</h2>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center px-4 py-2 mt-2 mb-2 hover:text-[#f7c601]"
                  >
                    <BiPlus className="mr-3" />
                    <h2 className="drop-text">Others</h2>
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="flex items-center flex-row gap-x-4">
          <a href="#">
            <h2 className="heading-text uppercase">Home</h2>
          </a>
          <a href="#">
            <h2 className="heading-text uppercase">Shop</h2>
          </a>
          <a href="#">
            <h2 className="heading-text uppercase">Product</h2>
          </a>
          <a href="#">
            <h2 className="heading-text uppercase">Blog</h2>
          </a>
          <a href="#">
            <h2 className="heading-text uppercase">Page</h2>
          </a>
        </div>
        <div className="flex flex-row gap-x-1">
          <p className="contact-text text-gray-300">Need help: </p>
          <h4 className="contact-no hover:text-yellow-700 text-[#f7c601]">
            +254115168266
          </h4>
        </div>
      </div>
    </>
  );
};
