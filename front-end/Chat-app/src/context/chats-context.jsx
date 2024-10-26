import { createContext, useContext, useState } from "react";

export const ChatContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useChatContext = () => {
	return useContext(ChatContext);
};

export const ChatContextProvider = ({ children }) => {
	const [chatUser, setChatUser] = useState(JSON.parse(localStorage.getItem("chat-user")) || null);

	return <ChatContext.Provider value={{ chatUser, setChatUser }}>{children}</ChatContext.Provider>;
};