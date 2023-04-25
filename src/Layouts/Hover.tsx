import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { BsHeart } from "react-icons/bs";

export const Hover = () => {
  return (
    <div className="relative">
      <div className="bg-white flex items-center justify-between p-4 fixed right-0 left-0 z-50 shadow-sm h-24 ease-in delay-1000">
        <div className="logo-img">
          <img src="src/assets/Images/logo-1.png" className="w-36" alt="Logo" />
        </div>
        <div className="flex flex-row gap-x-4">
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
            <h2 className="heading-text uppercase">Pages</h2>
          </a>
        </div>
        <div className="flex flex-row gap-x-9">
          <button className="cursor-pointer">
            <FaSearch className="w-6 h-6 border-black" />
          </button>
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
    </div>
  );
};
