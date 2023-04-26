import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { TfiPinterest } from "react-icons/tfi";

export const Footer = () => {
  return (
    <>
      <div className="grid grid-cols-8 px-2 py-16 bg-black">
        <div className="col-span-2 flex flex-col gap-y-4">
          <img
            src="src/assets/Images/logo-yellow.png"
            className="max-w-[167px] object-cover"
            loading="lazy"
            alt="logo"
          />
          <p className="text-gray-300 text-xs">
            Hi, we are always open for cooperation & suggestions, contact us in
            one of the ways below:
          </p>
          <h3 className="text-2xl text-white uppercase mt-4">Contact</h3>
          <p className="text-white flex flex-col gap-y-4">
            <p className="hover:text-yellow-500 text-xs">
              Co , 25 Silicon Road,London D04 89GR
            </p>
            <p className="hover:text-yellow-500 text-xs">PHONE: 1900 568 659</p>
            <p className="hover:text-yellow-500 text-xs">
              EMAIL:example@example.com
            </p>
          </p>
        </div>
        <div className="col-span-2 flex flex-col gap-y-4">
          <h3 className="text-2xl text-white uppercase mb-4">
            Product categories
          </h3>
          <p className="text-white flex flex-col gap-y-4">
            <a href="#">
              <p className="hover:text-yellow-500 text-xs">Body Parts</p>
            </a>
            <a href="#">
              <p className="hover:text-yellow-500 text-xs">Furniture Parts</p>
            </a>
            <a href="#">
              <p className="hover:text-yellow-500 text-xs">Lighting Parts</p>
            </a>
            <a href="#">
              <p className="hover:text-yellow-500 text-xs">Engine Parts</p>
            </a>
            <a href="#">
              <p className="hover:text-yellow-500 text-xs">Suspension Parts</p>
            </a>
            <a href="#">
              <p className="hover:text-yellow-500 text-xs">
                Brakes disks & Pads
              </p>
            </a>
          </p>
        </div>
        <div className="col-span-2 flex flex-col gap-y-4">
          <h3 className="text-2xl text-white uppercase mb-4">Get to Know us</h3>
          <p className="text-white flex flex-col gap-y-4">
            <a href="#">
              <p className="hover:text-yellow-500 text-xs">About Bumbleb</p>
            </a>
            <a href="#">
              <p className="hover:text-yellow-500 text-xs">Investors</p>
            </a>
            <a href="#">
              <p className="hover:text-yellow-500 text-xs">Career</p>
            </a>
            <a href="#">
              <p className="hover:text-yellow-500 text-xs">Contact Us</p>
            </a>
            <a href="#">
              <p className="hover:text-yellow-500 text-xs">Affiliate Program</p>
            </a>
            <a href="#">
              <p className="hover:text-yellow-500 text-xs">Partnership</p>
            </a>
          </p>
        </div>
        <div className="col-span-2 flex flex-col gap-y-4">
          <h3 className="text-2xl text-white uppercase mb-4">
            Get 10% discount
          </h3>
          <p className="text-gray-300 text-xs">
            Subscribe our newsletter and get 10% discount for your first order.
          </p>
          <div className="flex border-b-gray-700 border-b-2 p-3">
            <input
              type="email"
              name="email"
              id="email"
              className="outline-none border-0 bg-inherit text-white"
              placeholder="Your Email"
            />
            <button className="text-yellow-500 text-xs uppercase ml-6">
              <h3>Subscribe</h3>
            </button>
          </div>
          <div className="flex flex-row gap-x-2 py-10">
            <div className="bg-yellow-500 rounded-sm p-2 cursor-pointer">
              <a href="#socials">
                <FaTwitter />
              </a>
            </div>
            <div className="bg-yellow-500 rounded-sm p-2 cursor-pointer">
              <a href="#socials">
                <TfiPinterest />
              </a>
            </div>
            <div className="bg-yellow-500 rounded-sm p-2 cursor-pointer">
              <a href="#socials">
                <FaInstagram />
              </a>
            </div>
            <div className="bg-yellow-500 rounded-sm p-2 cursor-pointer">
              <a href="#socials">
                <FaFacebookF />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black border-t border-t-gray-700 py-8 px-8 flex justify-between">
        <p className="uppercase text-white text-xs">
          2023 &copy; bumbleb theme. All rights reserved
        </p>
        <img src="src/assets/Images/pay.png" alt="worldpay" />
      </div>
    </>
  );
};
