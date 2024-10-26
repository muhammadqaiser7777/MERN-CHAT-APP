import express from "express";
import protectRoute from "../middleware/protect.js";
import {sendMessage, getMessages} from "../controllers/message.controller.js";


const msgRouter = express.Router();

msgRouter.get("/:id", protectRoute, getMessages);
msgRouter.post("/send/:id", protectRoute, sendMessage);

export default msgRouter;