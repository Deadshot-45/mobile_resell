import React from "react";

const Button02 = ({icon, text}) => {
  return (
    <button className="flex gap-5 items-center content-center border-2 border-white px-7 py-3 text-white">
      <i className={`fa-brands fa-${icon} text-3xl`}></i>
      <div>
        Available on <p className="font-extrabold">{text}</p>
      </div>
    </button>
  );
};

export default Button02;
