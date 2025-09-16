import React from "react";
import Button from "./Button";

const ButtonsList = () => {
  return (
    <div className="flex flex-wrap gap-1 md:gap-0">
      <Button name="All" />
      <Button name="Movies" />
      <Button name="Javascript" />
      <Button name="Music" />
      <Button name="Data Structures" />
      <Button name="T-series" />
      <Button name="Calligraphy" />
      <Button name="Trailer" />
      <Button name="Study Skills" />
      <Button name="Arijit Singh" />
      <Button name="Watched" />
      <Button name="Jukebox" />
      <Button name="Job interviews" />
    </div>
  );
};

export default ButtonsList;
