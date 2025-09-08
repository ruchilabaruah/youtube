import React from "react";
import { formatViewCount } from "../utils/formatViewCount";
import { timeAgo } from "../utils/formatTimeStamp";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails, publishedAt } = snippet;

  const formattedViewCount = formatViewCount(statistics?.viewCount);
  const formattedTimeStamp = timeAgo(publishedAt);

  return (
    <div className="p-4 m-2 shadow-lg">
      <img
        className="rounded-lg"
        src={thumbnails?.maxres?.url}
        alt="thumbnail"
      />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{formattedViewCount} • {formattedTimeStamp}</li>
      </ul>
    </div>
  );
};

export default VideoCard;
