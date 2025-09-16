import React from "react";
import { comments } from "../utils/commentsData";
import CommentsList from "./CommentsList";

const CommentsContainer = () => {
  return (
    <div className="py-3 px-4 md:px-0">
      <h1 className="text-2xl font-bold">{comments.length} Comments</h1>
      <CommentsList comments={comments} />
    </div>
  );
};

export default CommentsContainer;
