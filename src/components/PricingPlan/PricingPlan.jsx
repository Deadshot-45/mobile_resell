import React from "react";
import PriceCard from "./PriceCard";

const PricingPlan = () => {
  return (
    <div className="flex gap-10 justify-center flex-col bg-white py-20">
      <div className="w-full flex gap-3 items-center content-center  flex-col font-bold">
        <h1>
          ABOUT <span className="text-green-700">APPNEW</span>
        </h1>
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAQCAYAAAABOs/SAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2lpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoxRkYxNDA5MEM2OTRFNDExODhGRThEMEQxODFGQTNFMyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5MjQzNTQwNzE0MDgxMUU2QTEwRUU1NkRDRjBFNzA4NyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5MjQzNTQwNjE0MDgxMUU2QTEwRUU1NkRDRjBFNzA4NyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6YjI5YmUzZDAtM2VlYy0wOTRmLTg5OTYtMzFmZmMzZjAwMzdhIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjFGRjE0MDkwQzY5NEU0MTE4OEZFOEQwRDE4MUZBM0UzIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+hDNvGgAAAR5JREFUeNpirJoezkAkkADi6UDsDcRvgbgTiCcQqW8mEHsC8RuovoksRFoqBcT7gVgNybB+IP4HxJPw6JMG4n1I+iShjv3HRIalyKCUBEuRQS4hi6XxWAoCQmTqk2Qi08UwsA6LmAzUUlU8+tYyUWDpFSAuwGLpPgKWXgLiIhY8waRKwFInaOom1VIXIH7HREYwXYZa+ppEfTBLwfqYSHQxyFJnLJYeAGIVPPouIluKbDGllioTsNQVTR/YYmkig4lqlsIsnkZqMEHBTCIsxaYPbrEnOS4GAnciLH2DSwHI4ndkWMpAQB9eS2EWt5EaTFCATd8FYiwFAWZbH52TUIVaQPwXiNcDcQRa4YANnID6WhOqD1R8RhKhDwwAAgwAcURXoChmDHUAAAAASUVORK5CYII="
          alt=""
        />
        <p className="text-center font-normal w-1/2">
          There are many variations of passages of Lorem Ipsum available, but
          the majorityhave suffered alteration in some form, by injected humour,
          available
        </p>
      </div>
      <div className="flex items-end justify-center gap-6">
      <PriceCard style1={'py-6'}/>
      <PriceCard style={'mx-0'} style1={'py-6'}/>
      <PriceCard style1={'py-6'}/>
      </div>
    </div>
  );
};

export default PricingPlan;
