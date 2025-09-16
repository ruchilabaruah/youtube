import React, { useEffect, useState } from "react";
import { YT_POPULAR_VIDEOS_URL } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { setPopularVideosInStore } from "../store/appSlice";
import { useDispatch } from "react-redux";

const VideoContainer = () => {
  const [popularVideos, setPopularVideos] = useState(null);
  const dispatch = useDispatch();

  const getPopularVideos = async () => {
    const response = await fetch(YT_POPULAR_VIDEOS_URL);
    const json = await response.json();
    setPopularVideos(json.items);

    /**
     *
     * [{id: "a" , name: "A"}, {id: "b", name: "B"}, {id: "c", name: "C"}]
     *
     * {"a": {name: "A"}, "b": {name: "B"}, "C": {name: "C"}}
     *
     */

    const parsedJson = json.items.reduce((acc, video) => {
      acc[video.id] = { ...video };
      return acc;
    }, {});

    dispatch(setPopularVideosInStore(parsedJson));
  };

  useEffect(() => {
    getPopularVideos();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4">
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
