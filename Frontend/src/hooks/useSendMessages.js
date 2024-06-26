import { useState } from "react";
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";

export const useSendMessages = () => {
  const [loading, setloading] = useState(false);
  const {
    messages: storeMessages,
    setMessage,
    selectedConversation,
  } = useConversation();

  const sendMessage = async (messages) => {
    setloading(true);
    try {
      const res = await fetch(
        `http://localhost:4600/api/message/send/${selectedConversation._id}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify({ messages }),
        }
      );
      const data = await res.json();
      console.log("selectedConversation id", selectedConversation._id);
      if (data.error) throw new Error(data.message);
      console.log(data);
      setMessage([...storeMessages, data.newMessage]);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setloading(false);
    }
  };
  return { loading, sendMessage };
};
