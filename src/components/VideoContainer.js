import React, { useEffect, useState } from "react";
import { YT_POPULAR_VIDEOS_URL } from "../utils/constants";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [popularVideos, setPopularVideos] = useState(null);

  const getPopularVideos = async () => {
    const response = await fetch(YT_POPULAR_VIDEOS_URL);
    const json = await response.json();
    console.log("Result: ", json);

    setPopularVideos(json.items);
  };

  useEffect(() => {
    getPopularVideos();
  }, []);

  return (
    <div className="flex flex-wrap">
      {popularVideos &&
        popularVideos.map((video) => <VideoCard id={video.id} info={video} />)}
    </div>
  );
};

export default VideoContainer;
