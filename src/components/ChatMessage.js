import React from "react";

const ChatMessage = ({ chatMessage }) => {
  const { author, message } = chatMessage;
  return (
    <div className="flex px-2 items-center">
      <img className="rounded-full w-8 h-8" src={author?.avatar} alt="avatar" />
      <div className="font-bold p-2">{author.name}</div>
      <div className="p-2">{message}</div>
    </div>
  );
};

export default ChatMessage;
