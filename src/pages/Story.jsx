import React from "react";
import Baristaimg from "../assets/Barista.png";
import { FaArrowRight } from "react-icons/fa6";

const Story = () => {
  return (
    <div>
      <div className="p-20 w-full h-screen bg-secondary flex">
        <div className="flex w-full items-center justify-center">
          <div className="w-[45%] mr-11">
            <img className="w-full rounded-2xl" src={Baristaimg} alt="Barista working image" />
          </div>
          <div className="w-[50%]">
            <h1 className="text-4xl mb-6">More Than Just Coffee</h1>
            <p className="text-lg mb-8 text-p">
              At Aura Cafe, we believe in the power of a pause. Our space is
              designed to be your third place—a warm, inviting environment where
              the aroma of fresh espresso meets the comfort of home. Whether
              you're catching up with friends or finding a quiet corner to work,
              you belong here.
            </p>
            <button className="text-button border-b-2 flex items-center gap-2">Read Our Story <FaArrowRight /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
