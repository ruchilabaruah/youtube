import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className="p-5 w-48 shadow-lg">
      <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>Subscriptions </li>
      </ul>
      <h3>Explore</h3>
      <ul>
        <li>Music</li>
        <li>Movies</li>
        <li>Gaming</li>
        <li>News</li>
        <li>Sports</li>
        <li>Podcasts</li>
      </ul>
      <h3>More from YouTube</h3>
      <ul>
        <li>YouTube Premium</li>
        <li>YouTube Music</li>
        <li>YouTube Kids</li>
      </ul>
    </div>
  );
};

export default Sidebar;
