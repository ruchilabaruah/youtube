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
    <div className="w-full md:flex md:gap-x-8 md:my-4 md:mx-8">
      <div className="flex flex-col">
        <iframe
          className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] md:rounded-lg"
          src={"https://www.youtube.com/embed/" + videoId}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <h2 className="py-4 text-2xl font-bold px-4 md:px-0">
          {currentVideo?.snippet?.title}
        </h2>
        <div className="flex items-center px-4 md:px-0">
          <img src={USER_ICON} alt="author" className="rounded-full w-6 h-6" />
          <h3 className="text-xl font-bold ml-2">
            {currentVideo?.snippet?.channelTitle}
          </h3>
        </div>
        <p className=" px-4 md:px-0">{currentVideo?.snippet?.description}</p>
        <CommentsContainer />
      </div>
      <div className="md:w-full h-[600px] border border-black rounded-lg m-4 md:m-0">
        <LiveChat />
      </div>
    </div>
  );
};

export default WatchPage;
