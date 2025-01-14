import React from "react";
import Button from "../Button/Button";
import Button02 from "../Button/Button02";

const DownloadBox = () => {
  return (
    <div className="flex flex-col content-center items-center gap-10">
      <div className="flex content-center items-center flex-col gap-4 text-white pt-10">
        <h2 className="font-bold text-xl">
          DOWNLOAD OUR <span className="text-green-600">LATESTAPP</span>
        </h2>
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAQCAYAAAABOs/SAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2lpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoxRkYxNDA5MEM2OTRFNDExODhGRThEMEQxODFGQTNFMyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5MjQzNTQwNzE0MDgxMUU2QTEwRUU1NkRDRjBFNzA4NyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5MjQzNTQwNjE0MDgxMUU2QTEwRUU1NkRDRjBFNzA4NyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6YjI5YmUzZDAtM2VlYy0wOTRmLTg5OTYtMzFmZmMzZjAwMzdhIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjFGRjE0MDkwQzY5NEU0MTE4OEZFOEQwRDE4MUZBM0UzIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+hDNvGgAAAR5JREFUeNpirJoezkAkkADi6UDsDcRvgbgTiCcQqW8mEHsC8RuovoksRFoqBcT7gVgNybB+IP4HxJPw6JMG4n1I+iShjv3HRIalyKCUBEuRQS4hi6XxWAoCQmTqk2Qi08UwsA6LmAzUUlU8+tYyUWDpFSAuwGLpPgKWXgLiIhY8waRKwFInaOom1VIXIH7HREYwXYZa+ppEfTBLwfqYSHQxyFJnLJYeAGIVPPouIluKbDGllioTsNQVTR/YYmkig4lqlsIsnkZqMEHBTCIsxaYPbrEnOS4GAnciLH2DSwHI4ndkWMpAQB9eS2EWt5EaTFCATd8FYiwFAWZbH52TUIVaQPwXiNcDcQRa4YANnID6WhOqD1R8RhKhDwwAAgwAcURXoChmDHUAAAAASUVORK5CYII="
          alt=""
        />
        <p className="w-2/3 text-xs text-center">There are many variations of passages of Lorem Ipsum available, but the majorityhave suffered alteration in some form, by injected humour,available</p>
      </div>
      <div className="flex justify-center gap-4 items-center pb-10 w-full">
       <Button02 icon={'apple'} text={'App Store'}/>
       <Button02 icon={'google-play'} text={'Google play'}/>
       <Button02 icon={'windows'} text={'Windows Store'}/>
      </div>
    </div>
  );
};

export default DownloadBox;
