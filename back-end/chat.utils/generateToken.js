// src/utils/generateTokenSetCookie.js
import jwt from 'jsonwebtoken';

const generateTokenSetCookie = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '1d' });

    res.cookie("jwt", token, {
        maxAge: 1 * 24 * 60 * 60 * 1000, // 1 day
        httpOnly: true,
        sameSite: "strict",
        secure: process.env.NODE_ENV !== "development", // Use secure cookies in production
    });
};

export default generateTokenSetCookie;
