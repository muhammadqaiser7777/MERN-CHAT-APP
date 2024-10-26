import React, { useState, useEffect } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";

const SearchInput = () => {
    const [search, setSearch] = useState("");
    const { setSelectedConversation } = useConversation();
    const { conversations } = useGetConversations();

    const [selectedTheme, setSelectedTheme] = useState("1");

    useEffect(() => {
        // Update state if localStorage changes (if needed)
        const savedTheme = localStorage.getItem('selectedTheme');
        if (savedTheme) {
            setSelectedTheme(savedTheme);
        }
    }, []);

    

    const getButtonClass = () => {
        switch (selectedTheme) {
            case "1":
                return "btn btn-circle bg-blue-500 text-white";
            case "2":
                return "btn btn-circle bg-green-800 text-white";
            case "3":
                return "btn btn-circle bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 text-white";
            default:
                return "btn btn-circle bg-sky-500 text-white";
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!search) return;
        if (search.length < 3) {
            return toast.error("Search term must be at least 3 characters long");
        }

        const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()));

        if (conversation) {
            setSelectedConversation(conversation);
            setSearch("");
        } else {
            toast.error("No such user found!");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
            <input
                type="text"
                placeholder="Search…"
                className="input input-bordered rounded-full"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <button type="submit" className={getButtonClass()}>
                <IoSearchSharp className="w-6 h-6 outline-none" />
            </button>
        </form>
    );
};

export default SearchInput;
