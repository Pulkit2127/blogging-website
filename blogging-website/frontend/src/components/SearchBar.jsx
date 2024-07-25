import React from "react";

const SearchBar = ({ big, onChange, placeholder }) => {
  return (
    <div class="relative rounded-full my-2 grow">
      <div class="absolute inset-y-0 flex items-center pl-3 text-[#8c8c8c] pointer-events-none left-0">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            fill="currentColor"
            class="w-4 h-4"
          >
            <path
              fill-rule="evenodd"
              d="M5.527 5.527a7.5 7.5 0 0111.268 9.852l3.581 3.583a1 1 0 01-1.414 1.415l-3.582-3.583A7.501 7.501 0 015.527 5.527zm1.414 1.414a5.5 5.5 0 107.779 7.779A5.5 5.5 0 006.94 6.94z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </span>
      </div>
      <input
        className={`block w-full rounded-full leading-5 outline-none placeholder:text-[#c7c7c7] placeholder:font-extralight border-none  text-[#262626bf] bg-[#000a2008] focus:bg-[#000a2014] pl-9 pr-3 sentry-unmask text-sm ${
          big ? "py-2.5" : "py-1.5"
        }`}
        autocomplete="off"
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchBar;
