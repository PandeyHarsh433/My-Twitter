import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Tweet from "./Tweet";
import TweetHead from "./TweetHead";
import { fetchAllTweets, selectAllTweets } from "../redux/tweet/tweetSlice";

const Tweets = () => {
  const [tweets, setTweets] = useState([]);
  const [child, setChild] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllTweets());
  }, [dispatch]);


  const data = useSelector(selectAllTweets);

  useEffect(() => {
    setTweets(data);
  }, [data]);

  return (
    <div className="w-[80%] ml-[10%] mmd:w-full smd:w-[15rem] smd:-m-5 usmd:pl-3">
      <div className="my-5">
        <TweetHead />
      </div>
      <div className="">
        {tweets.map((tweet, index) => (
          <Tweet key={index} tweet={tweet} child={setChild} />
        ))}
      </div>
    </div>
  );
};

export default Tweets;
