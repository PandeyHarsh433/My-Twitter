import React, { useEffect } from "react";
import Tweet from "./Tweet";
import TweetHead from "./TweetHead";

const Tweets = ({ data }) => {
  useEffect(() => {}, [data]);
  return (
    <div className="w-[80%] ml-[10%] mmd:w-full smd:w-[15rem] smd:-m-5 usmd:pl-3">
      <div className="my-5">
        <TweetHead />
      </div>
      <div className="">
        {data.map((tweet, index) => (
          <Tweet key={index} tweet={tweet} update={data} />
        ))}
      </div>
    </div>
  );
};

export default Tweets;
