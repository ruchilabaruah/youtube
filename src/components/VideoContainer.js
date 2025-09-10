import React, { useEffect, useState } from "react";
import { YT_POPULAR_VIDEOS_URL } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [popularVideos, setPopularVideos] = useState(null);

  const getPopularVideos = async () => {
    const response = await fetch(YT_POPULAR_VIDEOS_URL);
    const json = await response.json();

    setPopularVideos(json.items);
  };

  useEffect(() => {
    getPopularVideos();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4">
      {popularVideos &&
        popularVideos.map((video) => (
          <Link key={video.id} to={"/watch?v=" + video.id}>
            <VideoCard info={video} />
          </Link>
        ))}
    </div>
  );
};

export default VideoContainer;
