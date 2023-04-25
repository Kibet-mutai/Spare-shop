import { useState } from "react";
import { BiCaretDown } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";

export const Filter = () => {
  const bgImage = {
    url: "src/assets/Images/matterhorn-1313x875.jpg",
  };
  const [showDropDown, setShowDropDown] = useState(false);
  const [showDropDownTwo, setShowDropDownTwo] = useState(false);
  const [showDropDownThree, setShowDropDownThree] = useState(false);
  return (
    <>
      <div
        style={{ backgroundImage: `url(${bgImage.url})` }}
        className="bg-cover bg-center max-w-[1440px] h-[200px] m-auto mt-4 mx-6"
      >
        <div className="flex justify-center flex-row gap-x-3 p-24">
          <div className="relative w-56">
            <button
              className="flex justify-between bg-white rounded-l-full w-full p-4"
              onClick={() => setShowDropDown(!showDropDown)}
            >
              <h3>Select Year</h3>
              <BiCaretDown className="text-[#f7c601] mt-1" />
            </button>
            {showDropDown && (
              <div className="absolute left-0 top-full  right-0 bg-white">
                <ul className="flex flex-col w-full py-2 border-x-2 border-y-2 border-gray-400">
                  <li className="w-full hover:bg-blue-500 px-3">
                    <a href="#" className="block w-full">
                      Audi(2)
                    </a>
                  </li>
                  <li className="w-full hover:bg-blue-500 px-3">
                    <a href="#" className="block w-full">
                      Ford
                    </a>
                  </li>
                  <li className="w-full hover:bg-blue-500 px-3">
                    <a href="#" className="block w-full">
                      Hyundai
                    </a>
                  </li>
                  <li className="w-full hover:bg-blue-500 px-3">
                    <a href="#" className="block w-full">
                      Tesla
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className="relative w-64">
            <button
              className="flex justify-between bg-white w-full p-4"
              onClick={() => setShowDropDownThree(!showDropDownThree)}
            >
              <h3>Select Model</h3>
              <BiCaretDown className="text-[#f7c601] mt-1" />
            </button>
            {showDropDownThree && (
              <div className="absolute left-0 top-full right-0 bg-white">
                <ul className="flex flex-col w-full py-2 border-x-2 border-y-2 border-gray-400">
                  <li className="w-full hover:bg-blue-500 px-3">
                    <a href="#" className="block w-full">
                      A1(2)
                    </a>
                  </li>
                  <li className="w-full hover:bg-blue-500 px-3">
                    <a href="#" className="block w-full">
                      Civic
                    </a>
                  </li>
                  <li className="w-full hover:bg-blue-500 px-3">
                    <a href="#" className="block w-full">
                      Toyota
                    </a>
                  </li>
                  <li className="w-full hover:bg-blue-500 px-3">
                    <a href="#" className="block w-full">
                      Isuzu
                    </a>
                  </li>
                  <li className="w-full hover:bg-blue-500 px-3">
                    <a href="#" className="block w-full">
                      BMW
                    </a>
                  </li>
                  <li className="w-full hover:bg-blue-500 px-3">
                    <a href="#" className="block w-full">
                      MAN
                    </a>
                  </li>
                  <li className="w-full hover:bg-blue-500 px-3">
                    <a href="#" className="block w-full">
                      Mercedes Series
                    </a>
                  </li>
                  <li className="w-full hover:bg-blue-500 px-3">
                    <a href="#" className="block w-full">
                      Nissan
                    </a>
                  </li>
                  <li className="w-full hover:bg-blue-500 px-3">
                    <a href="#" className="block w-full">
                      Honda
                    </a>
                  </li>
                  <li className="w-full hover:bg-blue-500 px-3">
                    <a href="#" className="block w-full">
                      Yamaha
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className="relative w-64">
            <button
              className="flex justify-between bg-white w-full p-4"
              onClick={() => setShowDropDownTwo(!showDropDownTwo)}
            >
              <h3>Select Year</h3>
              <BiCaretDown className="text-[#f7c601] mt-1" />
            </button>
            {showDropDownTwo && (
              <div className="absolute left-0 top-full right-0 bg-white">
                <ul className="flex flex-col w-full py-2 border-x-2 border-y-2 border-gray-400">
                  <li className="w-full hover:bg-blue-500 px-3">
                    <a href="#" className="block w-full">
                      2005
                    </a>
                  </li>
                  <li className="w-full hover:bg-blue-500 px-3">
                    <a href="#" className="block w-full">
                      2007
                    </a>
                  </li>
                  <li className="w-full hover:bg-blue-500 px-3">
                    <a href="#" className="block w-full">
                      2010
                    </a>
                  </li>
                  <li className="w-full hover:bg-blue-500 px-3">
                    <a href="#" className="block w-full">
                      2015
                    </a>
                  </li>
                  <li className="w-full hover:bg-blue-500 px-3">
                    <a href="#" className="block w-full">
                      2018
                    </a>
                  </li>
                  <li className="w-full hover:bg-blue-500 px-3">
                    <a href="#" className="block w-full">
                      2020
                    </a>
                  </li>
                  <li className="w-full hover:bg-blue-500 px-3">
                    <a href="#" className="block w-full">
                      2022
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className="flex flex-col gap-y-6">
            <button
              className="flex items-center flex-row gap-x-4 bg-black rounded-r-full p-4 w-40 hover:bg-[#f7c601]"
              id="btn-filter"
            >
              <h3 className="font-bold text-[#f7c601] icon font-[Inter]">
                Filter
              </h3>
              <FaSearch className="text-[#f7c601] icon" />
            </button>
            <button id="btn-filter" className="bg-black p-3 rounded-md">
              <h3 className="text-white uppercase">Reset</h3>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
