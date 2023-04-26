export const Offers = () => {
  return (
    <div className="grid grid-cols-6 py-12 px-6 gap-x-4">
      <div className="col-span-2 relative hover:-translate-y-1 hover:scale-y-110 transition duration-1000">
        <img src="src/assets/Images/banner-18.jpg" alt="banner-image" />
        <div className="absolute top-10 left-5 flex flex-col gap-y-4">
          <h3 className="text-3xl font-extrabold uppercase">
            Lighting 25% Off
          </h3>
          <p className="">New generation lights</p>
          <button
            className="flex justify-center bg-[#f7c601] rounded-3xl mt-20 w-32 p-2 hover:bg-black"
            id="btn-offer"
          >
            <h3 className="uppercase offer-text">Shop now</h3>
          </button>
        </div>
      </div>
      <div className="col-span-2 pl-4 relative hover:-translate-y-1 hover:scale-y-110 transition duration-1000">
        <img src="src/assets/Images/img-3.jpg" alt="banner-image" />
        <div className="absolute top-10 left-5 flex flex-col gap-y-4">
          <h3 className=" text-3xl font-extrabold uppercase">
            Auto Repair Kit
          </h3>
          <p className="">power tools of the next level and new generation</p>
          <button
            className="flex justify-center bg-[#f7c601] rounded-3xl mt-20 w-32 p-2 hover:bg-black"
            id="btn-offer"
          >
            <h3 className="uppercase offer-text">Shop now</h3>
          </button>
        </div>
      </div>
      <div className="col-span-2 pl-4 relative hover:-translate-y-1 hover:scale-y-110 transition duration-1000">
        <img src="src/assets/Images/banner-19.jpg" alt="banner-image" />
        <div className="absolute top-10 left-5 flex flex-col gap-y-4">
          <h3 className=" text-3xl font-extrabold uppercase text-white">
            Tires and wheels 25% Off
          </h3>
          <p className="text-white">In conjuction with others</p>
          <button
            className="flex justify-center bg-[#f7c601] rounded-3xl mt-20 w-32 p-2 hover:bg-gray-300"
            id="btn-filter"
          >
            <h3 className="uppercase icon">Shop now</h3>
          </button>
        </div>
      </div>
    </div>
  );
};
