import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../store/appSlice";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import { USER_ICON } from "../utils/constants";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const videosInStore = useSelector((store) => store.app.popularVideos);

  const videoId = searchParams.get("v");

  const currentVideo = videosInStore[videoId];

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="flex gap-x-8 my-4 mx-8 w-full">
      <div className="flex flex-col">
        <iframe
          className="rounded-lg"
          width="1300"
          height="600"
          src={"https://www.youtube.com/embed/" + videoId}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <h2 className="py-4 text-2xl font-bold">
          {currentVideo?.snippet?.title}
        </h2>
        <div className="flex items-center">
          <img src={USER_ICON} alt="author" className="rounded-full w-6 h-6" />
          <h3 className="text-xl font-bold ml-2">
            {currentVideo?.snippet?.channelTitle}
          </h3>
        </div>
        <p>{currentVideo?.snippet?.description}</p>
        <CommentsContainer />
      </div>
      <div className="w-full h-[600px] border border-black rounded-lg">
        <LiveChat />
      </div>
    </div>
  );
};

export default WatchPage;
