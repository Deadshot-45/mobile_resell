import React from "react";
import Button from "../Button/Button";

const LeftContainer = () => {
  return (
    <div className="w-[280px] sm:w-[450px] p-5 flex flex-wrap h-full flex-col mx-0 my-auto gap-5">
      <h1 className="font-bold text-white tracking-widest text-xl flex flex-wrap">
        AWESOME
        <span className="text-green-700 pl-1 font-bold text-xl"> ANEW </span> MOBILE APP.
      </h1>
      <div className="text-white text-xs">
        There are many variations of passages of Lorem Ipsum available, but the
        majorityhave suffered alteration in some form, by injected humour, or
        randomised words which don't look even There are many variations of
        passages of Lorem Ipsum available
      </div>
      <div className="flex gap-8 w-full">
        <Button style={"bg-green-700 py-2 text-xs text-white"} text={"DOWNLOAD"}/>
        <Button style={"bg-white py-2 text-xs"} text={"LEARN MORE"}/>
      </div>
    </div>
  );
};

export default LeftContainer;
