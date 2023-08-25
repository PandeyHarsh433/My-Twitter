import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GrTwitter } from "react-icons/gr";
import { FiVideo, FiBarChart2 } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineFileImage } from "react-icons/ai";
import { toast } from "react-toastify";
import { createTweet } from "../redux/tweet/tweetSlice";

const TweetHead = () => {
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    const user = localStorage.getItem("userId");
    console.log(user);
    await dispatch(createTweet({ user, description }));
    setDescription("");
    toast.success("Tweeted!", {
      position: toast.POSITION.BOTTOM_CENTER,
    });
    setDesc("");
  };

  useEffect(() => {}, [dispatch]);

  return (
    <div>
      <div className="border border-slate-600 rounded-t-md px-3 smd:min-w-[20rem] usmd:w-[10rem] mmd:min-w-[20rem]">
        <div className="flex">
          <div className="flex-1 m-2">
            <h2 className="px-4 py-2 text-xl font-semibold text-white">Home</h2>
          </div>
          <div className="flex-1 px-4 py-2 m-2">
            <a
              href=""
              className=" text-2xl font-medium rounded-full text-white hover:bg-blue-800 hover:text-blue-300 float-right"
            >
              <GrTwitter className="m-2 h-6 w-6" />
            </a>
          </div>
          <hr className="border-gray-900"></hr>
        </div>
        <div className="flex">
          <div className="m-2 w-10 py-1">
            <img
              className="inline-block h-10 w-10 rounded-full"
              src="https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png"
              alt=""
            />
          </div>
          <div className="flex-1 px-2 pt-2 mt-2">
            <textarea
              className=" bg-transparent text-gray-400 font-medium text-lg w-full"
              rows="2"
              cols="50"
              placeholder="What's happening?"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
        </div>
      </div>
      <div className="flex border border-t-0 border-slate-600 rounded-b-md smd:min-w-[20rem] mmd:min-w-[20rem] usmd:w-[15rem] usmd:-ml-10 usmd:border-b-0 usmd:border-r-0 usmd:py-2">
        <div className="w-10"></div>
        <div className="w-64 px-2">
          <div className="flex items-center justify-center space-x-4 mt-1 ">
            <a
              href="#"
              className="group flex items-center text-blue-400 px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
            >
              <AiOutlineFileImage className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="group flex items-center text-blue-400 px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
            >
              <FiVideo className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="group flex items-center text-blue-400 px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
            >
              <FiBarChart2 className="h-6 w-6" />
            </a>
          </div>
        </div>
        <div
          className="flex-1 flex items-center justify-end"
          onClick={handleSubmit}
        >
          <button className="bg-blue-400 my-2 hover:bg-blue-600 text-white font-bold py-2 px-8 rounded-full mr-8 mmd:hidden">
            Tweet
          </button>
          <button className=" hover:bg-blue-600 text-white font-bold py-2 px-2 rounded-full hidden mmd:block">
            <GrTwitter className="m-2 h-6 w-6 text-blue-400 hover:text-blue-300" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TweetHead;
