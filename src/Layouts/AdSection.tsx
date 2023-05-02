export const AdSection = () => {
  const bgImage = {
    url: "src/assets/Images/17400-TUL11_1.webp",
  };
  return (
    <div className="grid grid-cols-6 p-4 gap-x-4">
      <div className="col-span-2">
        <div className="relative">
          <img
            src="src/assets/Images/banner-21.jpg"
            className="hover:scale-x-110 duration-300"
            alt="banner image"
          />
          <div className="absolute -translate-y-1/2 top-[30%]">
            <div className="flex flex-col px-2 gap-y-2">
              <h1 className="text-xl uppercase font-[Roboto]">Wheel rim new</h1>
              <p className="font-[inter] text-sm text-gray-500">
                More Color Options
              </p>
              <div className="pt-8">
                <button
                  className="items-center p-3 rounded-3xl bg-[#f7c601] hover:bg-black"
                  id="btn-offer"
                >
                  <h4 className="text-sm font-[Roboto] uppercase offer-text">
                    Apply now
                  </h4>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="col-span-4 bg-cover bg-no-repeat bg-center pr-8 py-6"
        style={{ backgroundImage: `url(${bgImage.url})` }}
      >
        <div className="flex flex-col gap-y-4 items-end">
          <h3 className="break-all text-3xl">MEMBERS TITANIUM EXHAUST</h3>
          <div className="flex gap-3">
            <span className="text-xl">$198.00</span>
            <span className=" line-through font-[Montserrat] text-xl">
              $409.00
            </span>
          </div>
          <div className="mt-4">
            <button className="bg-[#f7c601] items-center p-2 rounded-3xl">
              <h3 className="text-xs uppercase">shop now</h3>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
