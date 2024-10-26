import { useEffect, useState } from "react";
import { useSocketContext } from "../../context/socketcontext";
import useConversation from "../../zustand/useConversation";

const Conversation = ({ conversation, lastIdx }) => {
    const { selectedConversation, setSelectedConversation } = useConversation();
    const isSelected = selectedConversation?._id === conversation._id;

    const { onlineUsers } = useSocketContext();
    const isOnline = onlineUsers.includes(conversation._id);

    const [selectedTheme, setSelectedTheme] = useState("1");

    useEffect(() => {
        const savedTheme = localStorage.getItem('selectedTheme');
        if (savedTheme) {
            setSelectedTheme(savedTheme);
        }
    }, []);

    const getConversationClass = () => {
        switch (selectedTheme) {
            case "1":
                return "bg-sky-500 text-white";
            case "2":
                return "bg-green-900 text-white";
            case "3":
                return "bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 text-white";
            default:
                return "bg-sky-500 text-white";
        }
    };

    const hoverClass = () => {
        switch (selectedTheme) {
            case "1":
                return "hover:bg-sky-600 hover:text-white";
            case "2":
                return "hover:bg-green-700 hover:text-white";
            case "3":
                return "hover:bg-gradient-to-r hover:from-blue-600 hover:via-purple-600 hover:to-red-600 hover:text-white";
            default:
                return "hover:bg-sky-600 hover:text-white";
        }
    };

    return (
        <>
            <div
                className={`flex gap-3 items-center rounded px-2 py-3 cursor-pointer ${isSelected ? getConversationClass() : ""} ${hoverClass()}`}
                onClick={() => setSelectedConversation(conversation)}
            >
                <div className={`avatar ${isOnline ? "online" : ""}`}>
                    <div className='w-12 rounded-full'>
                        <img
                            src={conversation.profilePic}
                            alt='user avatar'
                        />
                    </div>
                </div>
                <div className='flex flex-col flex-1'>
                    <div className='flex gap-3 justify-between'>
                        <p className='font-bold text-gray-200'>{conversation.fullName}</p>
                    </div>
                </div>
            </div>
            {!lastIdx && <div className='divider my-0 py-0 h-1' />}
        </>
    );
};

export default Conversation;
