import React, { useState, useRef, useEffect } from "react";
import { BsSend } from "react-icons/bs";
import EmojiPicker from 'emoji-picker-react'; // Import the emoji picker component
import useSendMessage from "../../hooks/useSendMessages";
import { BsEmojiSmileUpsideDownFill } from "react-icons/bs";

const MessageInput = () => {
const [message, setMessage] = useState("");
const [showEmojiPicker, setShowEmojiPicker] = useState(false); // State to control the visibility of the emoji picker
const { loading, sendMessage } = useSendMessage();
const inputRef = useRef(null);

  // Close the emoji picker when clicked outside of it
	useEffect(() => {
    const handleClickOutside = (event) => {
		if (inputRef.current && !inputRef.current.contains(event.target)) {
        setShowEmojiPicker(false);
		}
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
		document.removeEventListener("mousedown", handleClickOutside);
    };
	}, []);

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!message) return;
		await sendMessage(message);
		setMessage("");
	};

	const handleEmojiSelect = (emojiObject) => {
    const emoji = emojiObject.emoji;
    setMessage((prevMessage) => prevMessage + emoji); // Append the selected emoji to the message
	};

	const handleKeyDown = (e) => {
    if (e.key === "Enter" && e.shiftKey) {
      // If Shift+Enter is pressed, insert a newline
		e.preventDefault();
		setMessage((prevMessage) => prevMessage + "\n");
    } else if (e.key === "Enter" && !e.shiftKey) {
      // If only Enter is pressed, submit the form
		e.preventDefault(); // Prevent default behavior of Enter key
		handleSubmit(e);
    }
};

	const toggleEmojiPicker = () => {
    setShowEmojiPicker((prevState) => !prevState); // Toggle the visibility of the emoji picker
};

return (
    <form className='px-4 my-3' onSubmit={handleSubmit}>
		<div className='w-full relative' ref={inputRef}>
        <textarea
    		className='border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white pl-8 overflow-auto resize-none' // Changed input to textarea, added resize-none class
    		style={{ paddingRight: "calc(1.5em + 20px)", maxHeight: "3.5em", overflowY: "auto" }} // Added paddingRight, maxHeight, and overflowY inline styles
			placeholder='Send a message'
			value={message}
			onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown} // Added onKeyDown event handler
        />

        <button type='submit' className='absolute inset-y-0 end-1 flex items-center pe-3'>
			{loading ? <div className='loading loading-spinner'></div> : <BsSend />}
        </button>
        <button type="button" onClick={toggleEmojiPicker} className='absolute inset-y-0 start-0 flex items-center pl-3'>
			<BsEmojiSmileUpsideDownFill />
        </button>
        {showEmojiPicker && (
			<EmojiPicker
            onEmojiClick={handleEmojiSelect}
            disableSearchBar
            style={{ position: "absolute", left: 0, bottom: "100%", zIndex: 1 }} // Position the emoji picker on the left side
            pickerStyle={{ width: "auto" }}
            native
			/>
        )}
		</div>
    </form>
  );
};

export default MessageInput;
