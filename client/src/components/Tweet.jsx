import React, { useEffect } from "react";
import { AiFillHeart, AiOutlineEllipsis } from "react-icons/ai";
import { FaRetweet, FaRegComment } from "react-icons/fa";
import { IoMdShare } from "react-icons/io";
import { Menu, Transition } from "@headlessui/react";
import { useDispatch } from "react-redux";
import { deleteTweet, fetchSingleTweet } from "../redux/tweet/tweetSlice";
import { toast } from "react-toastify";

const Tweet = ({ tweet, update }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTweet(tweet.id));
    toast.success("Tweet deleted..!", {
      position: toast.POSITION.BOTTOM_CENTER,
    });
  };

  const handleEdit = () => {
    dispatch(fetchSingleTweet(tweet.id));
  };

  useEffect(() => {}, [dispatch, tweet, update]);

  return (
    <div className="mt-5 border p-2 rounded-md border-slate-600 mlg:w-full mmd:min-w-[20rem] smd:max-w-[16rem] smd:mx-auto usmd:max-w-[7rem] usmd:m-2">
      <div className="flex flex-shrink-0 p-4 pb-0">
        <div className="flex justify-between item-center w-full">
          <div>
            <a href="#" className="flex-shrink-0 group block">
              <div className="flex items-center">
                <div>
                  <img
                    className="inline-block h-10 w-10 rounded-full"
                    src="https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png"
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <p className="text-base leading-6 font-medium text-white">
                    {tweet ? tweet.user.name : "Sonali Hirave"}
                    <span className="text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
                      {tweet
                        ? `${tweet.user.username} . ${tweet.date}`
                        : "@ShonaDesign . 16 April"}
                    </span>
                  </p>
                </div>
              </div>
            </a>
          </div>

          <div>
            <Menu as="div" className="relative ml-3">
              <div>
                <Menu.Button className="relative flex rounded-full bg-gray-800 text-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 ">
                  <AiOutlineEllipsis className="w-6 h-6 text-white" />
                </Menu.Button>
              </div>
              <Transition
                as={React.Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none bg-gray-700">
                  <Menu.Item>
                    {({ active }) => (
                      <div
                        href="#"
                        className={`${
                          active ? "bg-gray-600" : ""
                        } block px-4 py-2 text-sm text-gray-100`}
                        onClick={handleEdit}
                      >
                        Edit
                      </div>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <div
                        className={`${
                          active ? "bg-gray-600" : ""
                        } block px-4 py-2 text-sm text-gray-100`}
                        onClick={handleDelete}
                      >
                        Delete
                      </div>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </div>
      <div className="pl-2">
        <p className="text-base width-auto font-medium text-white flex-shrink p-2">
          {tweet
            ? tweet.description
            : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non modi odio illo impedit quasi, dolor numquam enim alias distinctio? Cupiditate quisquam aperiam sunt iste voluptatum voluptas odit illo ad repudiandae."}
        </p>
        <div className="flex items-center justify-between space-x-2 py-3">
          <a
            href="#"
            className="group flex items-center text-blue-400 text-sm font-medium rounded-full px-2 py-1  hover:text-blue-800 p-2"
          >
            {" "}
            <span className="m-1 text-md">{tweet.likes}</span>
            <AiFillHeart className="h-5 w-5 mr-1" />
            <span className="mmd:hidden">Likes</span>
          </a>
          <a
            href="#"
            className="group flex items-center text-blue-400 text-sm font-medium rounded-full px-2 py-1 hover:text-blue-800 p-2"
          >
            <FaRetweet className="h-5 w-5 mr-1" />
            <span className="mmd:hidden">Retweet</span>
          </a>
          <a
            href="#"
            className="group flex items-center text-blue-400 text-sm font-medium rounded-full px-2 py-1 hover:text-blue-800 p-2"
          >
            <span className="m-1 text-md">{tweet.comments}</span>
            <FaRegComment className="h-5 w-5 mr-1" />
            <span className="mmd:hidden"> Comments</span>
          </a>
          <a
            href="#"
            className="group flex items-center text-blue-400 text-sm font-medium rounded-full px-2 py-1 hover:text-blue-800 p-2"
          >
            <span className="m-1 text-md">{tweet.shares}</span>
            <IoMdShare className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
