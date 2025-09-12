import React, { useEffect, useRef, useState } from "react";
import { getRandomChatMessage } from "../utils/getRandomChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../store/chatSlice";
import ChatMessage from "./ChatMessage";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  const containerRef = useRef(null);
  const [userInput, setUserInput] = useState("");

  const handleSubmit = () => {
    const newMessage = {
      id: Date.now() + Math.random().toString(16).slice(2),
      author: {
        name: "Ruchila Baruah",
        avatar: "https://www.gravatar.com/avatar/?d=mp",
      },
      message: userInput,
      date: new Date().toISOString(),
      likes: 1,
      dislikes: 0,
      isHearted: Math.random() < 0.1,
    };
    dispatch(addMessage(newMessage));
    setUserInput("");
  };

  useEffect(() => {
    const timer = setInterval(() => {
      // API polling
      const message = getRandomChatMessage();

      dispatch(addMessage(message));
      const container = containerRef.current;
      if (container) {
        container.scrollTop = container.scrollHeight + 50;
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="p-4 flex flex-col">
      <div className="h-[500px]">
        <div ref={containerRef} className="h-full overflow-y-scroll">
          {chatMessages &&
            chatMessages?.map((chatMessage) => (
              <ChatMessage chatMessage={chatMessage} />
            ))}
        </div>
      </div>
      <form
        className="border border-black my-4 w-full"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <input
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          className="px-4 py-2 w-full"
          type="text"
          placeholder="Type your message here"
        />
      </form>
    </div>
  );
};

export default LiveChat;
