import React from "react";

const FootLeft = () => {
  return (
    <div className="flex flex-col">
      <form action="#" className="flex flex-col gap-4 w-[400px] p-10">
        <h1 className="font-extrabold tracking-widest">SAY HELLO!</h1>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          className="border-2 border-collapse bg-transparent rounded-md border-white px-3 py-2 outline-none"
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          className="border-2 bg-transparent rounded-md border-white px-3 py-2 outline-none"
        />
        <textarea id="message" name="message" rows="10" cols="10" placeholder="Message" className="max-h-[100px] rounded-md outline-none border-2 border-white px-3 py-2 bg-transparent "></textarea>
        <button type="submit" className="bg-green-600 py-2">
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default FootLeft;
