import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ChatContextProvider } from "./context/chats-context.jsx";
import { SocketContextProvider } from "./context/socketcontext.jsx";
import { ThemeProvider } from "./context/theme-context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <ThemeProvider>
                <ChatContextProvider>
                    <SocketContextProvider>
                        <App />
                    </SocketContextProvider>
                </ChatContextProvider>
            </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>
);
