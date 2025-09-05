import React from "react";

const Header = () => {
  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          className="h-8"
          src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png"
          alt="hamburger-icon"
        />
        <img
          className="h-8 ml-6"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
          alt="youtube-logo"
        />
      </div>
      <div className="col-span-10">
        <div class="flex justify-center">
          <input
            type="text"
            className="w-1/2 border border-gray-400 p-2 rounded-l-full"
          />
          <button className="border border-gray-400 p-2 rounded-r-full">
            🔍
          </button>
        </div>
      </div>
      <div className="col-span-1">
        <img
          className="h-8 justify-self-end"
          src="https://www.pngfind.com/pngs/m/93-938050_png-file-transparent-white-user-icon-png-download.png"
          alt="user-icon"
        />
      </div>
    </div>
  );
};

export default Header;
