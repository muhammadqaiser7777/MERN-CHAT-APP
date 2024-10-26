import ThemeSelector from "../chatmodels/thememodel.js";

export const selectedTheme = async (req, res) => {
    try {
    const loggedInUserId = req.user._id;
    const { Theme: selectedTheme } = req.body;

    // Validate the selected theme
    if (!["1", "2", "3"].includes(selectedTheme)) {
        return res.status(400).json({ error: "Invalid theme selected" });
    }

    const userTheme = await ThemeSelector.findOneAndUpdate(
        { ThemeUser: loggedInUserId },
        { Theme: selectedTheme },
        { new: true, upsert: true } // Create a new document if none exists
    );

    if (!userTheme) {
        return res.status(500).json({ error: "Failed to create theme document" });
    }

    let themeResponse;
    switch (selectedTheme) {
        case "1":
        themeResponse = "Default theme";
        break;
        case "2":
        themeResponse = "WhatsApp theme";
        break;
        case "3":
        themeResponse = "Instagram theme";
        break;
        default:
        themeResponse = "Invalid Theme";
        break;
    }

    res.status(200).json({ message: `Theme set to ${themeResponse}` });
    } catch (error) {
    console.error("Error in setting theme", error.message);
    res.status(500).json({ error: "Internal server error" });
    }
};

export const getTheme = async (req, res) => {
    try {
    const loggedInUserId = req.user._id;

    const userTheme = await ThemeSelector.findOne({ ThemeUser: loggedInUserId });

    const theme = userTheme ? userTheme.Theme : "1"; // Default theme is '1' if not set

    res.status(200).json({ theme });
    } catch (error) {
    console.error("Error in getting theme", error.message);
    res.status(500).json({ error: "Internal server error" });
    }
};
