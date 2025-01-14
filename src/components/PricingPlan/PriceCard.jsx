import React from "react";
import Button from '../Button/Button'

const PriceCard = ({style, style1}) => {
  return (
    <div className="w-[300px] shadow-slate-400 shadow-md">
      <div className={`flex flex-col items-center gap-2  ${style1} bg-[#2d3e50] text-white font-bold hover:shadow-[0 0 4px #ccc]`}>
        <p className="">PERSONAL</p>
        <p className="text-4xl">
          $ 10.99 <span className="text-xl">/month</span>
        </p>
      </div>
      <div className={`flex flex-col items-center justify-center gap-3 py-10 ${style}`}>
        <p className="">FIVE WEBSITE</p>
        <p className="">FIVE USER</p>
        <p className="">100 GB BANDWITH</p>
        <p className="">2 GB STORAGE</p>
        <p className="">24/7 SUPPORT</p>
        <Button text={'SIGN UP'} style={'bg-[#2d3e50] text-white mt-6 hover:shadow-lg hover:bg-[#2f4f50]'} />
      </div>
    </div>
  );
};

export default PriceCard;
