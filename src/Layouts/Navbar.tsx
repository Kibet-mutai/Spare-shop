export const Navbar = () => {
  return (
    <div className="flex justify-around bg-black p-2">
      <div className="text-white">
        <h6>Hot days! - 50% Get ready for summer!</h6>
      </div>
      <div className="text-white text-xs">
        <h4>TAKE CARE OF YOUR TIRE 22% OFF USE CODE “ MNSKS ”</h4>
      </div>
      <div className="flex flex-row gap-x-2">
        <a href="#">
          <h5 className="text-white hover:text-yellow-700">Store Locator | </h5>
        </a>
        <a href="#">
          <h5 className="text-white hover:text-yellow-700">
            Order Tracking |{" "}
          </h5>
        </a>
        <a href="#">
          <h5 className="text-white hover:text-yellow-700">FAQS</h5>
        </a>
      </div>
    </div>
  );
};
