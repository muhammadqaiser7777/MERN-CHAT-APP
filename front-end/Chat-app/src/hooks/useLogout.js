import { useState } from "react";
import { useChatContext } from "../context/chats-context";
import toast from "react-hot-toast";

const Logout = () => {
	const [loading, setLoading] = useState(false);
	const { setChatUser } = useChatContext();

	const logout = async () => {
		setLoading(true);
		try {
			const res = await fetch("/api/chat/logout", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
			});
			const data = await res.json();
			if (data.error) {
				throw new Error(data.error);
			}

			localStorage.removeItem("chat-user");
			localStorage.removeItem("selectedTheme"); // Remove theme data
			setChatUser(null);
		} catch (error) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};

	return { loading, logout };
};
export default Logout;
