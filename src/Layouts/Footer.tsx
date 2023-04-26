export const Footer = () => {
  return (
    <div className="grid grid-cols-8 px-2 py-16 bg-black">
      <div className="col-span-2 flex flex-col gap-y-4">
        <img
          src="src/assets/Images/logo-yellow.png"
          className="max-w-[167px] object-cover"
          loading="lazy"
          alt="logo"
        />
        <p className="text-gray-300">
          Hi, we are always open for cooperation & suggestions, contact us in
          one of the ways below:
        </p>
        <h3 className="text-4xl text-white uppercase mt-4">Contact</h3>
        <p className="text-white flex flex-col gap-y-4">
          <p className="hover:text-yellow-500">
            Co , 25 Silicon Road,London D04 89GR
          </p>
          <p className="hover:text-yellow-500">PHONE: 1900 568 659</p>
          <p className="hover:text-yellow-500">EMAIL:example@example.com</p>
        </p>
      </div>
      <div className="col-span-2 flex flex-col gap-y-4">
        <h3 className="text-4xl text-white uppercase mb-4">
          Product categories
        </h3>
        <p className="text-white flex flex-col gap-y-4">
          <a href="#">
            <p className="hover:text-yellow-500">Body Parts</p>
          </a>
          <a href="#">
            <p className="hover:text-yellow-500">Furniture Parts</p>
          </a>
          <a href="#">
            <p className="hover:text-yellow-500">Lighting Parts</p>
          </a>
          <a href="#">
            <p className="hover:text-yellow-500">Engine Parts</p>
          </a>
          <a href="#">
            <p className="hover:text-yellow-500">Suspension Parts</p>
          </a>
          <a href="#">
            <p className="hover:text-yellow-500">Brakes disks & Pads</p>
          </a>
        </p>
      </div>
      <div className="col-span-2 flex flex-col gap-y-4">
        <h3 className="text-4xl text-white uppercase mb-4">Get to Know us</h3>
        <p className="text-white flex flex-col gap-y-4">
          <a href="#">
            <p className="hover:text-yellow-500">About Bumbleb</p>
          </a>
          <a href="#">
            <p className="hover:text-yellow-500">Investors</p>
          </a>
          <a href="#">
            <p className="hover:text-yellow-500">Career</p>
          </a>
          <a href="#">
            <p className="hover:text-yellow-500">Contact Us</p>
          </a>
          <a href="#">
            <p className="hover:text-yellow-500">Affiliate Program</p>
          </a>
          <a href="#">
            <p className="hover:text-yellow-500">Partnership</p>
          </a>
        </p>
      </div>
      <div className="col-span-2 flex flex-col gap-y-4">
        <h3 className="text-4xl text-white uppercase mb-4">Get 10% discount</h3>
        <p className="text-gray-300">
          Subscribe our newsletter and get 10% discount for your first order.
        </p>
        <div className="flex border-b p-3">
          <input
            type="email"
            name="email"
            id="email"
            className="outline-none border-0 bg-inherit text-white"
            placeholder="Your Email"
          />
          <button className="text-yellow-500 text-2xl uppercase ml-6">
            <h3>Subscribe</h3>
          </button>
        </div>
      </div>
    </div>
  );
};
