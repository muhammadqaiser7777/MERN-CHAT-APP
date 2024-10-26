import React, { useEffect, useState } from 'react';
import useConversation from '../../zustand/useConversation';
import MessageInput from './message-input';
import Messages from './messages';
import { TiMessages } from "react-icons/ti";
import { useChatContext } from '../../context/chats-context';

const MessageContainer = () => {
	const { selectedConversation, setSelectedConversation } = useConversation();
	
const [selectedTheme, setSelectedTheme] = useState("1");

useEffect(() => {
    const savedTheme = localStorage.getItem('selectedTheme');
    if (savedTheme) {
        if (savedTheme !== selectedTheme) {
            setSelectedTheme(savedTheme);
        }
    }
}, [selectedTheme]);


	useEffect(() => {
		return () => setSelectedConversation(null);
	}, [setSelectedConversation]);

	const getBgColorClass = () => {
		switch (selectedTheme) {
			case "1":
				return "bg-blue-500 px-4 py-2 mb-2";
			case "2":
				return "bg-green-800 px-4 py-2 mb-2";
			case "3":
				return "bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 px-4 py-2 mb-2";
			default:
				return "bg-blue-500";
		}
	};

	return (
		<div className='md:min-w-[450px] flex flex-col'>
			{!selectedConversation ? (
				<NoChatSelected />
			) : (
				<>
					{/* Header */}
					<div className={`px-4 ${getBgColorClass()}`}>
						<span className='label-text'></span>
						<span className={`font-bold text-white`}>{selectedConversation.fullName}</span>
					</div>
					<Messages />
					<MessageInput />
				</>
			)}
		</div>
	);
};

export default MessageContainer;

const NoChatSelected = () => {
	const { chatUser } = useChatContext();

	return (
		<div className='flex items-center justify-center w-full h-full'>
			<div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
				<p>Welcome 👋 {chatUser.fullName} ❄</p>
				<p>Select a chat to start messaging</p>
				<TiMessages className='text-3xl md:text-6xl text-center' />
			</div>
		</div>
	);
};
