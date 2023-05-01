import { useState } from "react";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { BestSellingSingle } from "./BestSellingSingle";
import { FaSlash } from "react-icons/fa";

export const BestSellingProducts = () => {
  //   const slideLeft = () => {
  //     var slider = document.getElementById("slider");
  //     slider.scrollLeft = slider.scrollLeft - 500;
  //   };
  //   const slideRight = () => {
  //     var slider = document.getElementById("slider");
  //     slider.scrollLeft = slider.scrollLeft - 500;
  //   };
  return (
    <>
      <div className="uppercase p-8 flex justify-between">
        <h3 className="text-2xl">Bestseller products</h3>
        <div className="gap-3 flex best-links">
          <a href="#" className="link-one">
            Energy parts \
          </a>
          <a href="#" className="link-two">
            Furniture parts \
          </a>

          <a href="#" className="link-three">
            Suspension parts
          </a>
        </div>
      </div>
      <div className="relative">
        <div className="absolute top-1/2 -translate-y-1/2 z-10 text-red-800">
          <BsChevronLeft className="h-8 w-8" />
        </div>
        <div className="absolute right-0  z-10 text-red-800 top-1/2 -translate-y-1/2">
          <BsChevronRight className="h-8 w-8" />
        </div>
        <BestSellingSingle />
      </div>
    </>
  );
};
