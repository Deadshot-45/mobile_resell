import React from "react";

const Button02 = ({icon, text}) => {
  return (
    <button className="flex gap-2 items-center content-center border-2 border-white p-2 text-white">
      <i className={`fa-brands fa-${icon} text-xl`}></i>
      <div className="text-[10px]">
        Available on <p className="font-extrabold">{text}</p>
      </div>
    </button>
  );
};

export default Button02;
