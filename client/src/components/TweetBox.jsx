import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  FaTimes,
  FaGlobe,
  FaImage,
  FaPollH,
  FaSmile,
  FaCalendarAlt,
} from "react-icons/fa";
import profile from "./../assets/profile.jpg";
import { editTweet } from "../redux/tweet/tweetSlice";
import { toast } from "react-toastify";

function TweetBox({ data }) {
  const [show, setShow] = useState(true);
  const [changeData, setChangeData] = useState("");
  const dispatch = useDispatch();

  const handleEdit = () => {
    const id = data.id;
    dispatch(editTweet({ id, changeData }));
    toast.success("Tweet Edited..!", {
      position: toast.POSITION.BOTTOM_CENTER,
    });
  };

  return (
    <div
      className={`fixed inset-0 flex justify-center items-center rounded-md bg-gray-900 bg-opacity-70 z-50 ${
        show ? "block" : "hidden"
      }`}
    >
      <div className="rounded-xl bg-gray-700 w-full md:w-2/3 lg:w-1/3 relative">
        <div className="px-5 py-5 flex items-center justify-between text-blue-400 border-b">
          <FaTimes
            className="text-xl cursor-pointer"
            onClick={() => setShow(!show)}
          />
        </div>

        <div className="flex p-4">
          <div>
            <img className="rounded-full w-14" src={profile} alt="Profile" />
          </div>

          <div className="ml-3 flex flex-col w-full">
            <textarea
              className="w-full text-xl resize-none outline-none h-32 bg-gray-600 rounded-lg p-5"
              value={changeData}
              onChange={(e) => setChangeData(e.target.value)}
              placeholder={data.description}
            ></textarea>

          </div>
        </div>

        <div className="flex items-center text-blue-400 justify-between py-3 px-4 border-t">
          <div className="flex text-2xl pl-10">
            <div className="flex items-center justify-center p-3 hover:bg-gray-500 rounded-full cursor-pointer text-black">
              <FaImage />
            </div>

            <div className="flex items-center justify-center p-3 hover:bg-gray-500 rounded-full cursor-pointer text-black">
              <FaPollH />
            </div>

            <div className="flex items-center justify-center p-3 hover:bg-gray-500 rounded-full cursor-pointer text-black">
              <FaSmile />
            </div>

            <div className="flex items-center justify-center p-3 hover:bg-gray-500 rounded-full cursor-pointer text-black">
              <FaCalendarAlt />
            </div>
          </div>

          <div>
            <p
              className="inline px-4 py-3 rounded-full font-bold text-white bg-gray-500 cursor-pointer hover:bg-gray-600"
              onClick={handleEdit}
            >
              Edit
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TweetBox;


