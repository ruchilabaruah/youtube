import React from "react";

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
        </div>
      </div>
    </div>
  );
};

export default Comment;
