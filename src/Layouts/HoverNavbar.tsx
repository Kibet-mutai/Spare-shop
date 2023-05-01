import { AiFillCaretDown } from "react-icons/ai";

export const HoverNavbar = () => {
  return (
    <>
      <div className="invisible transition origin-bottom duration-300 ease-in-out absolute z-10 translate-x-1/2 -translate-y-1/2 left-40 right-0 nav-hover">
        <AiFillCaretDown className=" rotate-[-30deg] text-[#f7c601]" />
      </div>
      <div className="invisible transition origin-bottom duration-300 ease-in-out absolute z-10 bg-white border p-8 w-[40vw] right-0 -translate-x-1/2 left-0 top-full nav-hover">
        <div className="flex flex-row gap-y-4">
          <div className="imag">
            <img
              src="src/assets/Images/Blog1-720x484.jpg"
              className="max-w-[125px]"
              alt="blog-image"
            />
          </div>
          <div className="flex flex-col gap-y-2 p-4">
            <div className="text hover:text-[#f7c601] text-xs">
              <a href="#">
                <h3>
                  RIVIAN R1S FIRST DRIVE REVIEW: THE SUV FINALLY ARRIVES! (SORT
                  OF)
                </h3>
              </a>
            </div>
            <div className="flex flex-row gap-x-2">
              <h1 className="text-sm border-r pr-2">April 30, 2023 </h1>
              <h1 className="text-sm">10 Comments</h1>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-y-4 pt-6">
          <div className="imag">
            <img
              src="src/assets/Images/lambo.jpg"
              className="max-w-[125px]"
              alt="blog-image"
            />
          </div>
          <div className="flex flex-col gap-y-2 p-4">
            <div className="text hover:text-[#f7c601] text-xs">
              <a href="#">
                <h3>
                  WHICH COUNTRIES USE VEHICLES WITH A RIGHT-HAND STEERING WHEEL
                </h3>
              </a>
            </div>
            <div className="flex flex-row gap-x-2">
              <h1 className="text-sm border-r pr-2">April 30, 2023 </h1>
              <h1 className="text-sm">10 Comments</h1>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-y-4 pt-6">
          <div className="imag">
            <img
              src="src/assets/Images/mustang.jpg"
              className="max-w-[125px]"
              alt="blog-image"
            />
          </div>
          <div className="flex flex-col gap-y-2 p-4">
            <div className="text hover:text-[#f7c601] text-xs">
              <a href="#">
                <h3>LIMITED EDITION BMW 3.0 CSL HOMMAGE OFFICIALLY TEASED</h3>
              </a>
            </div>
            <div className="flex flex-row gap-x-2">
              <h1 className="text-sm border-r pr-2">April 30, 2023 </h1>
              <h1 className="text-sm">10 Comments</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
