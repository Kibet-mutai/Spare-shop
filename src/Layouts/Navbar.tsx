import HiMagnifyingGlass from "react-icons";
export const Navbar = () => {
  return (
    <>
      <div className="flex justify-around bg-black p-2">
        <div className="text-white">
          <h6>Hot days! - 50% Get ready for summer!</h6>
        </div>
        <div className="text-white text-xs">
          <h4>TAKE CARE OF YOUR TIRE 22% OFF USE CODE “ MNSKS ”</h4>
        </div>
        <div className="flex flex-row gap-x-2">
          <a href="#">
            <h5 className="text-white hover:text-yellow-700">
              Store Locator |{" "}
            </h5>
          </a>
          <a href="#">
            <h5 className="text-white hover:text-yellow-700">
              Order Tracking |
            </h5>
          </a>
          <a href="#">
            <h5 className="text-white hover:text-yellow-700">FAQS</h5>
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
          <div className="relative">
            <button
              className="py-2 px-2 border-r text-base cursor-pointer flex flex-row truncate items-center focus:outline-none"
              data-dropdown-placement="bottom"
              type="button"
            >
              <span className=" hover:text-[#f7c601]">All Category</span>
              <svg
                className="w-4 h-4 ml-2"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            <div
              id="dropdownUsers"
              className="z-10 absolute top-full left-0 bg-white rounded-lg shadow w-60 dark:bg-gray-700"
            >
              <ul
                className="h-48 py-2 overflow-y-auto text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownUsersButton"
              >
                <li>
                  <a
                    href="#"
                    className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    <img
                      className="w-6 h-6 mr-2 rounded-full"
                      src="/docs/images/people/profile-picture-1.jpg"
                      alt="Jese image"
                    />
                    Jese Leos
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    <img
                      className="w-6 h-6 mr-2 rounded-full"
                      src="/docs/images/people/profile-picture-2.jpg"
                      alt="Jese image"
                    />
                    Robert Gough
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    <img
                      className="w-6 h-6 mr-2 rounded-full"
                      src="/docs/images/people/profile-picture-3.jpg"
                      alt="Jese image"
                    />
                    Bonnie Green
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    <img
                      className="w-6 h-6 mr-2 rounded-full"
                      src="/docs/images/people/profile-picture-4.jpg"
                      alt="Jese image"
                    />
                    Leslie Livingston
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    <img
                      className="w-6 h-6 mr-2 rounded-full"
                      src="/docs/images/people/profile-picture-5.jpg"
                      alt="Jese image"
                    />
                    Michael Gough
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    <img
                      className="w-6 h-6 mr-2 rounded-full"
                      src="/docs/images/people/profile-picture-2.jpg"
                      alt="Jese image"
                    />
                    Joseph Mcfall
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    <img
                      className="w-6 h-6 mr-2 rounded-full"
                      src="/docs/images/people/profile-picture-3.jpg"
                      alt="Jese image"
                    />
                    Roberta Casas
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    <img
                      className="w-6 h-6 mr-2 rounded-full"
                      src="/docs/images/people/profile-picture-1.jpg"
                      alt="Jese image"
                    />
                    Neil Sims
                  </a>
                </li>
              </ul>
              <a
                href="#"
                className="flex items-center p-3 text-sm font-medium text-blue-600 border-t border-gray-200 rounded-b-lg bg-gray-50 dark:border-gray-600 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-blue-500 hover:underline"
              >
                <svg
                  className="w-5 h-5 mr-1"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path>
                </svg>
                Add new user
              </a>
            </div>
          </div>
          <div className="search-bar py-2 pl-4">
            <input
              className="rounded-3xl outline-none"
              type="search"
              name="search"
              id="search"
              placeholder="Search for products"
            />
          </div>
          <button className="bg-black w-20 h-full py-2 rounded-r-3xl flex justify-center hover:bg-yellow-600">
            {/* <a target="_blank" href="https://icons8.com/icon/59878/search"></a>
            <a target="_blank" href="https://icons8.com"></a> */}
            <HiMagnifyingGlass />
          </button>
        </div>
        <div className="flex flex-row gap-x-4">
          <div className="icons">
            <a href="#">
              <img
                src="src/assets/Images/user.png"
                className="w-6 h-6"
                alt=""
              />
            </a>
          </div>
          <div className="icons">
            <a href="#">
              <img
                src="src/assets/Images/heart.png"
                className="w-6 h-6"
                alt=""
              />
            </a>
          </div>
          <div className="icons">
            <a href="#">
              <img
                src="src/assets/Images/shopping-cart.png"
                className="w-6 h-6"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
