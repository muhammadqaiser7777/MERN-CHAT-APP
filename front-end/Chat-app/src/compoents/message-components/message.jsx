import React from "react";
import { useState, useEffect } from "react";
import { extractTime } from "../../utils/extractTime";
import useConversation from "../../zustand/useConversation";
import { useChatContext } from "../../context/chats-context";

const Message = ({ message }) => {
    const { chatUser } = useChatContext();
    const { selectedConversation } = useConversation();

    const [selectedTheme, setSelectedTheme] = useState("1");

    useEffect(() => {
        const savedTheme = localStorage.getItem('selectedTheme');
        if (savedTheme) {
            setSelectedTheme(savedTheme);
        }
    }, []);

    const getBubbleBgColor = (fromMe) => {
        switch (selectedTheme) {
            case "1":
                return fromMe ? "bg-blue-500" : "";
            case "2":
                return fromMe ? "bg-green-800" : "";
            case "3":
                return fromMe ? "bg-gradient-to-l from-red-500 via-purple-500 to-blue-500 px-4 py-2 mb-2" : "";
            default:
                return fromMe ? "bg-sky-500" : "";
        }
    };

    const fromMe = message.senderId === chatUser._id;
    const formattedTime = extractTime(message.createdAt);
    const chatClassName = fromMe ? "chat-end" : "chat-start";
    const profilePic = fromMe ? chatUser.profilePic : selectedConversation?.profilePic;
    const bubbleBgColor = getBubbleBgColor(fromMe);
    const shakeClass = message.shouldShake ? "shake" : "";
    const marginStyle = fromMe ? { marginRight: "20px" } : { marginLeft: "20px" };
    const maxWidthStyle = { maxWidth: "300px" };

    return (
        <div className={`chat ${chatClassName}`} style={marginStyle}>
            <div className='chat-image avatar'>
                <div className='w-10 rounded-full'>
                    <img alt='Profile' src={profilePic} />
                </div>
            </div>
            <div className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass} pb-2`} style={{ ...maxWidthStyle, wordWrap: "break-word" }}>{message.message}</div>
            <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>{formattedTime}</div>
        </div>
    );
};
export default Message;
