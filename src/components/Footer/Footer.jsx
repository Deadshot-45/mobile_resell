import React from "react";
import FootLeft from "./FootLeft";
import FootRight from "./FootRight";

const Footer = () => {
  let icon = [
    { name: "facebook-f", id:1 },
    { name: "instagram", id:2 },
    { name: "twitter", id:3 },
    { name: "pinterest", id:4 },
    { name: "google", id:5 },
    { name: "youtube", id:6 },
  ];
  return (
    <footer className="bg-[#2d3e50] text-white py-10 flex gap-3 items-center justify-center flex-col pb-20">
      <div className="flex gap-3 items-center content-center  flex-col font-bold w-1/2">
        <h1 className="text-xl">
          GET <span className="text-green-700">IN TOUCH</span>
        </h1>
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAQCAYAAAABOs/SAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2lpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoxRkYxNDA5MEM2OTRFNDExODhGRThEMEQxODFGQTNFMyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5MjQzNTQwNzE0MDgxMUU2QTEwRUU1NkRDRjBFNzA4NyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5MjQzNTQwNjE0MDgxMUU2QTEwRUU1NkRDRjBFNzA4NyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6YjI5YmUzZDAtM2VlYy0wOTRmLTg5OTYtMzFmZmMzZjAwMzdhIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjFGRjE0MDkwQzY5NEU0MTE4OEZFOEQwRDE4MUZBM0UzIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+hDNvGgAAAR5JREFUeNpirJoezkAkkADi6UDsDcRvgbgTiCcQqW8mEHsC8RuovoksRFoqBcT7gVgNybB+IP4HxJPw6JMG4n1I+iShjv3HRIalyKCUBEuRQS4hi6XxWAoCQmTqk2Qi08UwsA6LmAzUUlU8+tYyUWDpFSAuwGLpPgKWXgLiIhY8waRKwFInaOom1VIXIH7HREYwXYZa+ppEfTBLwfqYSHQxyFJnLJYeAGIVPPouIluKbDGllioTsNQVTR/YYmkig4lqlsIsnkZqMEHBTCIsxaYPbrEnOS4GAnciLH2DSwHI4ndkWMpAQB9eS2EWt5EaTFCATd8FYiwFAWZbH52TUIVaQPwXiNcDcQRa4YANnID6WhOqD1R8RhKhDwwAAgwAcURXoChmDHUAAAAASUVORK5CYII="
          alt=""
        />
        <p className="text-center font-normal text-[10px] w-[300px]">
          There are many variations of passages of Lorem Ipsum available, but
          the majorityhave suffered alteration in some form, by injected humour,
          available
        </p>
      </div>
      <div className="flex justify-around sm:w-2/3">
        <FootLeft />
        <FootRight />
      </div>
      <div className="flex flex-col justify-center gap-2 items-center pt-10">
        <p className="font-bold text-xl">SUBSCRIBE FOR OUR NEWSLETTER</p>
        <p className="w-[300px] text-center text-[10px]">
          There are many variations of passages of Lorem Ipsum available, but
          the majorityhave alteration in some form, by injected humour,available
        </p>
        <div className="w-[300px] my-3 flex flex-wrap justify-between items-center border-2 bg-transparent m-0 border-white  outline-none rounded-xl">
          <input
            type="email"
            className="bg-transparent px-3 py-2 text-[10px]"
            placeholder="Enter tour Email address"
          />
          <button
            type="button"
            className="px-4 py-2 text-[10px] bg-white text-black rounded-xl"
          >
            SUBSCRIBE
          </button>
        </div>
        <div className="flex gap-3 mb-3">
          {icon.map(({ name, id }) => {
            return (
              <i key={id}
                className={`fa-brands fa-${name} w-[20px] h-[20px] flex justify-center items-center border-2 border-white text-[8px] rounded-full`}
              ></i>
            );
          })}
        </div>
        <p className="text-[10px]">Copyright © 2025 HasThemes</p>
      </div>
    </footer>
  );
};

export default Footer;
