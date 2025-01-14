import React from "react";
import Button from '../Button/Button'

const PriceCard = ({style, style1}) => {
  return (
    <div className="w-[130px] md:w-[200px] shadow-slate-400 shadow-md">
      <div className={`flex flex-col items-center ${style1} bg-[#2d3e50] text-white font-bold hover:shadow-[0 0 4px #ccc] md:py-4 md:gap-2`}>
        <p className="text-[10px]">PERSONAL</p>
        <p className="text-[10px] md:text-[14px]">
          $ 10.99 <span className="text-[7px]">/month</span>
        </p>
      </div>
      <div className={`flex flex-col md:gap-2 items-center justify-center gap-1 py-2 ${style} font-semibold md:py-5 text-[8px] md:text-[10px]`}>
        <p className="">FIVE USER</p>
        <p className="">FIVE WEBSITE</p>
        <p className="">100 GB BANDWITH</p>
        <p className="">2 GB STORAGE</p>
        <p className="">24/7 SUPPORT</p>
        <Button text={'SIGN UP'} style={'bg-[#2d3e50] text-white text-[8px] py-2 md:mt-3 hover:shadow-lg hover:bg-[#2f4f50]'} />
      </div>
    </div>
  );
};

export default PriceCard;
