import { BiCaretDown } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";

export const Filter = () => {
  const bgImage = {
    url: "src/assets/Images/matterhorn-1313x875.jpg",
  };
  return (
    <div
      style={{ backgroundImage: `url(${bgImage.url})` }}
      className="bg-cover bg-center max-w-[1440px] h-[350px] m-auto mt-4 mx-6"
    >
      <div className="flex flex-row gap-x-3 p-32">
        <div className="relative w-56">
          <button className="flex justify-between bg-white rounded-l-full w-full p-4">
            <h3>Select Maker</h3>
            <BiCaretDown className="text-[#f7c601] mt-1" />
          </button>
          <div className="absolute left-0 top-full right-0 bg-white">
            <ul className="flex flex-col w-full py-2 border-x-2 border-y-2 border-gray-400">
              <li className="w-full hover:bg-blue-500 px-3">
                <a href="#" className="block w-full">
                  Audi(2)
                </a>
              </li>
              <li className="w-full hover:bg-blue-500 px-3">
                <a href="#" className="block w-full">
                  Audi(2)
                </a>
              </li>
              <li className="w-full hover:bg-blue-500 px-3">
                <a href="#" className="block w-full">
                  Audi(2)
                </a>
              </li>
              <li className="w-full hover:bg-blue-500 px-3">
                <a href="#" className="block w-full">
                  Audi(2)
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="relative w-64">
          <button className="flex justify-between bg-white w-full p-4">
            <h3>Select Maker</h3>
            <BiCaretDown className="text-[#f7c601] mt-1" />
          </button>
          <div className="absolute left-0 bottom-full right-0 bg-white">
            <ul className="flex flex-col w-full py-2 border-x-2 border-y-2 border-gray-400">
              <li className="w-full hover:bg-blue-500 px-3">
                <a href="#" className="block w-full">
                  Audi(2)
                </a>
              </li>
              <li className="w-full hover:bg-blue-500 px-3">
                <a href="#" className="block w-full">
                  Audi(2)
                </a>
              </li>
              <li className="w-full hover:bg-blue-500 px-3">
                <a href="#" className="block w-full">
                  Audi(2)
                </a>
              </li>
              <li className="w-full hover:bg-blue-500 px-3">
                <a href="#" className="block w-full">
                  Audi(2)
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="relative w-64">
          <button className="flex justify-between bg-white w-full p-4">
            <h3>Select Maker</h3>
            <BiCaretDown className="text-[#f7c601] mt-1" />
          </button>
          <div className="absolute left-0 top-full right-0 bg-white">
            <ul className="flex flex-col w-full py-2 border-x-2 border-y-2 border-gray-400">
              <li className="w-full hover:bg-blue-500 px-3">
                <a href="#" className="block w-full">
                  Audi(2)
                </a>
              </li>
              <li className="w-full hover:bg-blue-500 px-3">
                <a href="#" className="block w-full">
                  Audi(2)
                </a>
              </li>
              <li className="w-full hover:bg-blue-500 px-3">
                <a href="#" className="block w-full">
                  Audi(2)
                </a>
              </li>
              <li className="w-full hover:bg-blue-500 px-3">
                <a href="#" className="block w-full">
                  Audi(2)
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-40">
          <button
            className="flex items-center flex-row gap-x-4 bg-black rounded-r-full p-4 w-full hover:bg-[#f7c601]"
            id="btn-filter"
          >
            <h3 className="font-bold text-[#f7c601] icon font-[Inter]">
              Filter
            </h3>
            <FaSearch className="text-[#f7c601] icon" />
          </button>
        </div>
      </div>
    </div>
  );
};
