import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import router from "./routes/chat.routes.js";
import msgRouter from "./routes/message.routes.js";
import userRoutes from "./routes/userroutes.js";
import themeRoutes from "./routes/themeroutes.js";

import connectMongo from "./database/connectMongo.js";
import { app, server } from "./socket/socket.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());

app.use("/api/chat", router);
app.use("/api/messages", msgRouter);
app.use("/api/users", userRoutes);
app.use("/api/themes", themeRoutes);

server.listen(PORT, () => {
	connectMongo();
	console.log(`Server Running on port ${PORT}`);
});
