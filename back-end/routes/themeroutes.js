import express from "express";
import { selectedTheme, getTheme } from "../controllers/theme.controller.js";
import protectRoute from "../middleware/protect.js";

const themeRoutes = express.Router();

// Route to select theme
themeRoutes.post("/selectTheme",protectRoute, selectedTheme);

// Route to get current theme
themeRoutes.get("/currentTheme",protectRoute, getTheme);

export default themeRoutes;
