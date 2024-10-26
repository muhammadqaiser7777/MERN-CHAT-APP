import mongoose from "mongoose";
const Schema = mongoose.Schema;

// Define the schema for the Theme
const themeSchema = new Schema({
    ThemeUser: {
    type: Schema.Types.ObjectId,
    ref: 'User', // Assumes there's a User model
    required: true,
    unique: true // Ensure each user has only one theme document
    },
    Theme: {
    type: String,
    required: true,
    enum: ['1', '2', '3'] // Limit to the valid theme values
    }
});

// Create an index to improve query performance
themeSchema.index({ ThemeUser: 1 }, { unique: true });

// Create the Theme model
const ThemeSelector = mongoose.model('ThemeSelector', themeSchema);

export default ThemeSelector;
