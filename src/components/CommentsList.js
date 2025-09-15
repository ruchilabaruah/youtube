import React from "react";
import Comment from "./Comment";

const CommentsList = ({ comments }) => {
  if (!comments) return null;

  return (
    <div className="my-4">
      {comments.map((comment) => (
        <>
          <Comment data={comment} key={comment} />
          <div className="mx-4 border-l-2 border-gray-400">
            {comment.replies && (
              <div className="mx-2">
                <CommentsList comments={comment.replies} />
              </div>
            )}
          </div>
        </>
      ))}
    </div>
  );
};

export default CommentsList;
