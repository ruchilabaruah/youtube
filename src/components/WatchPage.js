import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../store/appSlice";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  const videoId = searchParams.get("v");

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="px-20">
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
    </div>
  );
};

export default WatchPage;
