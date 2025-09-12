import React, { useEffect, useRef } from "react";
import { getRandomChatMessage } from "../utils/getRandomChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../store/chatSlice";
import ChatMessage from "./ChatMessage";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  const containerRef = useRef(null);

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
    <div
      ref={containerRef}
      className="p-4 border border-black rounded-lg h-full overflow-y-scroll"
    >
      {chatMessages &&
        chatMessages?.map((chatMessage) => (
          <ChatMessage chatMessage={chatMessage} />
        ))}
    </div>
  );
};

export default LiveChat;
