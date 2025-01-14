import React from "react";
import Button from "../Button/Button";

const FootLeft = () => {
  return (
    <div className="flex flex-col w-1/2">
      <form action="#" className="flex flex-col gap-3 p-3">
        <h1 className="font-extrabold tracking-widest text-xs">SAY HELLO!</h1>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          className="border-2 text-[10px] border-collapse bg-transparent rounded-md border-white px-2 py-2 outline-none"
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          className="border-2 text-[10px] bg-transparent rounded-md border-white px-3 py-2 outline-none"
        />
        <textarea id="message" name="message" rows="10" cols="10" placeholder="Message" className="max-h-[50px] text-[10px] rounded-md outline-none border-2 border-white px-3 py-2 bg-transparent "></textarea>
        <Button text={'SUBMIT'} style={'bg-green-600 text-xs py-2'}/>
      </form>
    </div>
  );
};

export default FootLeft;
