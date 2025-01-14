import React from "react";
import Button from "../Button/Button";

const NavBar = () => {
  // Array of navigation links for better maintainability
  const navLinks = [
    { label: "HOME", href: "#" },
    { label: "ABOUT", href: "#" },
    { label: "FEATURES", href: "#" },
    { label: "PRICING", href: "#" },
    { label: "REVIEWS", href: "#" },
    { label: "SCREENSHOTS", href: "#" },
    { label: "SUPPORTS", href: "#" },
  ];

  return (
    <nav className="px-10 py-6 bg-[#2d3e50] flex items-center justify-between text-white w-full fixed top-0">
      <div className="mx-3">
        <img 
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALIAAAA8CAYAAADCMODAAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDhGMjcwNDA5MjZFMTFFOTg2QTc5NDFFNEIzQjU4NkMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDhGMjcwM0Y5MjZFMTFFOTg2QTc5NDFFNEIzQjU4NkMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkFFOEZGQjk5OTAyRTExRTk4QjM5RURCODEyOUQ4RDNFIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkFFOEZGQjlBOTAyRTExRTk4QjM5RURCODEyOUQ4RDNFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+jUss+AAAB45JREFUeNrsXWtoXEUU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"
        />
      </div>

      <ul className="flex gap-6 justify-end w-4/5 items-center text-xs mr-6">
        {navLinks.map((link) => (
          <li key={link.label} className="hover:border-b-2 hover:border-green-600 hover:py-1 transition duration-1000 ease-in-out">
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
        <li>
          <Button style={"bg-green-700 hover:bg-green-800"} text={"DOWNLOAD"} />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;