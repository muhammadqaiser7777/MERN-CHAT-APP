import React, { useState, useEffect } from 'react';
import { PiPaintBrushBroad } from "react-icons/pi";
import { IoChatbubbleSharp } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";
import { MdWhatsapp } from "react-icons/md";
import useTheme from "../../hooks/useThemes"; // Assuming the hook is in a folder named "hooks"

const Theme = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { selectedTheme, selectTheme, loading, error } = useTheme();

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleCheckboxChange = (e) => {
        const theme = e.target.value;
        console.log(`Selected theme: ${theme}`); // Optional debug log
        selectTheme(theme);
        localStorage.setItem('selectedTheme', theme); // Save selected theme to local storage
        window.location.reload(); // Reload the page to apply the theme
    };

    // Handle potential initial theme fetch error and display a fallback message
    const [themeFetchError, setThemeFetchError] = useState(null);
    useEffect(() => {
        if (error) {
            setThemeFetchError(error.message || 'Failed to fetch current theme');
        }
    }, [error]);

    return (
        <div className="relative dropdown-right">
            <div tabIndex={0} role="button" onClick={toggleDropdown}>
                <PiPaintBrushBroad className='w-6 h-6 text-white cursor-pointer' />
            </div>
            {isOpen && (
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-24 absolute right-0 mt-2">
                    {themeFetchError ? (
                        <li>
                            <p className="text-red-500">{themeFetchError}</p>
                        </li>
                    ) : (
                        <>
                            <li>
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        value="1"
                                        name="opt"
                                        checked={selectedTheme === '1'}
                                        onChange={handleCheckboxChange}
                                        disabled={loading}
                                    />
                                    <IoChatbubbleSharp />
                                </label>
                            </li>
                            <li>
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        value="2"
                                        name="opt"
                                        checked={selectedTheme === '2'}
                                        onChange={handleCheckboxChange}
                                        disabled={loading}
                                    />
                                    <MdWhatsapp />
                                </label>
                            </li>
                            <li>
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        value="3"
                                        name="opt"
                                        checked={selectedTheme === '3'}
                                        onChange={handleCheckboxChange}
                                        disabled={loading}
                                    />
                                    <FaInstagram />
                                </label>
                            </li>
                        </>
                    )}
                </ul>
            )}
            {loading && <p>Loading theme...</p>}
        </div>
    );
};

export default Theme;
