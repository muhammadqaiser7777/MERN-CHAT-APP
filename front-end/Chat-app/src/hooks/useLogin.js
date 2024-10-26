import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useChatContext } from "../context/chats-context";
import { isTokenExpired } from "../utils/tokenUtils";

const useLogin = () => {
	const [loading, setLoading] = useState(false);
	const { setChatUser } = useChatContext();
	const navigate = useNavigate();

	useEffect(() => {
		const user = JSON.parse(localStorage.getItem("chat-user"));
		const token = document.cookie.split('; ').find(row => row.startsWith('jwt='))?.split('=')[1];

		if (!user || !token || isTokenExpired(token)) {
			navigate("/login"); // Redirect to login page if token is expired or user is not found
		} else {
			setChatUser(user);
			const theme = localStorage.getItem('selectedTheme') || "1";
			localStorage.setItem('selectedTheme', theme); // Ensure the theme is stored correctly
		}
	}, [navigate, setChatUser]);

	const login = async (username, password) => {
		const success = handleInputErrors(username, password);
		if (!success) return;
		setLoading(true);
		try {
			const res = await fetch("/api/chat/login", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ username, password }),
			});

			const data = await res.json();
			if (data.error) {
				throw new Error(data.error);
			}

			localStorage.setItem("chat-user", JSON.stringify(data));
			const theme = data.theme || "1"; // Assuming the theme is part of the user data
			localStorage.setItem("selectedTheme", theme); // Store the theme in local storage
			setChatUser(data);
			navigate("/home"); // Redirect to home page after successful login
		} catch (error) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};

	return { loading, login };
};

export default useLogin;

function handleInputErrors(username, password) {
	if (!username || !password) {
		toast.error("Please fill in all fields");
		return false;
	}

	return true;
}
