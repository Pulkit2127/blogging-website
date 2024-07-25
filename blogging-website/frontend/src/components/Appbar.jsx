import React from "react";
import SearchBar from "../components/SearchBar";

const Appbar = () => {
  return (
    <div className="px-6 py-0 flex justify-between items-center sticky top-0 right-0 left-0 border-b">
      <div className="flex gap-5 items-center">
        <div className="text-3xl font-bold font-playfair">BlogDot</div>
        <SearchBar big placeholder={"Search"}></SearchBar>
      </div>
      <div className="flex gap-5 items-center ">
        <div className="flex gap-2 text-gray-500 hover:text-black cursor-pointer duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            aria-label="Write"
          >
            <path
              fill="currentColor"
              d="M14 4a.5.5 0 0 0 0-1zm7 6a.5.5 0 0 0-1 0zm-7-7H4v1h10zM3 4v16h1V4zm1 17h16v-1H4zm17-1V10h-1v10zm-1 1a1 1 0 0 0 1-1h-1zM3 20a1 1 0 0 0 1 1v-1zM4 3a1 1 0 0 0-1 1h1z"
            ></path>
            <path
              stroke="currentColor"
              d="m17.5 4.5-8.458 8.458a.25.25 0 0 0-.06.098l-.824 2.47a.25.25 0 0 0 .316.316l2.47-.823a.25.25 0 0 0 .098-.06L19.5 6.5m-2-2 2.323-2.323a.25.25 0 0 1 .354 0l1.646 1.646a.25.25 0 0 1 0 .354L19.5 6.5m-2-2 2 2"
            ></path>
          </svg>
          <span className="text-inherit ">Write</span>
        </div>
        <div className="w-8 h-8 bg-gray-200 rounded-full flex justify-center items-center">
          <div>JS</div>
        </div>
      </div>
    </div>
  );
};

export default Appbar;
