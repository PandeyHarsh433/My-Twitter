import React from "react";
import { AiOutlineSetting, AiOutlineDown } from "react-icons/ai";

const RightMenu = () => {
  return (
    <div className="pr-2">
      <div className="flex">
        <div className="flex-1">
          <h2 className="px-4 py-2 text-xl w-48 font-semibold text-white">
            Germany trends
          </h2>
        </div>
        <div className="flex-1 px-4 py-2 m-2">
          <a
            href=""
            className=" text-2xl rounded-full text-white hover:bg-blue-800 hover:text-blue-300 float-right"
          >
            <AiOutlineSetting className="m-2 h-6 w-6" />
          </a>
        </div>
      </div>
      <hr className="border-gray-600" />
      <div className="flex flex-col ">
        <div className="flex">
          <div className="flex-1">
            <p className="px-4 ml-2 mt-3 w-48 text-xs text-gray-400">
              2 . Politics . Trending
            </p>
            <h2 className="px-4 ml-2 w-48 font-bold text-white">#HI-Fashion</h2>
            <p className="px-4 ml-2 mb-3 w-48 text-xs text-gray-400">
              8,464 Tweets
            </p>
          </div>
          <div className="flex-1 px-4 py-2 m-2">
            <a
              href=""
              className=" text-2xl rounded-full text-gray-400 hover:bg-blue-800 hover:text-blue-300 float-right"
            >
              <AiOutlineDown className="m-2 h-5 w-5" />
            </a>
          </div>
        </div>
        <div className="flex">
          <div className="flex-1">
            <p className="px-4 ml-2 mt-3 w-48 text-xs text-gray-400">
              2 . Politics . Trending
            </p>
            <h2 className="px-4 ml-2 w-48 font-bold text-white">#HI-Fashion</h2>
            <p className="px-4 ml-2 mb-3 w-48 text-xs text-gray-400">
              8,464 Tweets
            </p>
          </div>
          <div className="flex-1 px-4 py-2 m-2">
            <a
              href=""
              className=" text-2xl rounded-full text-gray-400 hover:bg-blue-800 hover:text-blue-300 float-right"
            >
              <AiOutlineDown className="m-2 h-5 w-5" />
            </a>
          </div>
        </div>
        <div className="flex">
          <div className="flex-1">
            <p className="px-4 ml-2 mt-3 w-48 text-xs text-gray-400">
              2 . Politics . Trending
            </p>
            <h2 className="px-4 ml-2 w-48 font-bold text-white">#HI-Fashion</h2>
            <p className="px-4 ml-2 mb-3 w-48 text-xs text-gray-400">
              8,464 Tweets
            </p>
          </div>
          <div className="flex-1 px-4 py-2 m-2">
            <a
              href=""
              className=" text-2xl rounded-full text-gray-400 hover:bg-blue-800 hover:text-blue-300 float-right"
            >
              <AiOutlineDown className="m-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightMenu;
