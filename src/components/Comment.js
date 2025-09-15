import React from "react";
import { DISLIKE, LIKE } from "../utils/constants";

const Comment = ({ data }) => {
  return (
    <div className="py-2 my-2 shadow-lg">
      <div className="flex">
        <img
          className="w-12 h-12 rounded-full"
          src={data.image}
          alt="user-img"
        />
        <div className="mx-4">
          <div className="font-bold">{data.name}</div>
          <div>{data.comment}</div>
          <div className="flex">
            <img src={LIKE} alt="like" className="my-2 w-6 h-6" />
            <img src={DISLIKE} alt="like" className="my-2 ml-4 w-6 h-6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
