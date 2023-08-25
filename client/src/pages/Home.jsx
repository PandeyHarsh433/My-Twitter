import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import TweetBox from "../components/TweetBox";
import MainTwitter from "../components/MainTwitter";
import { selectSingleTweet } from "../redux/tweet/tweetSlice";
import { useDispatch } from "react-redux";

const Home = () => {
  const data = useSelector(selectSingleTweet);
  const dispatch = useDispatch();

  useEffect(() => {}, [dispatch]);

  return (
    <div className="w-full overflow-x-hidden">
      <Navbar />
      {data && <TweetBox data={data} />}
      <MainTwitter />
    </div>
  );
};

export default Home;
