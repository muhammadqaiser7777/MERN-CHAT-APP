import React, { useState } from 'react';
import { IoSettingsOutline } from "react-icons/io5";
import Logout from '../settings-components/logout';
import Theme from '../settings-components/theme';

const Settings = () => {
    return (
        <div className="dropdown dropdown-top fixed left-4 bottom-2">
            <div tabIndex={0} role="button" className="btn m-1"><IoSettingsOutline /></div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-20 ">
                    <li className="w-16 content-center items-center"><button><Logout /></button></li>
                    <li className="w-16 content-center items-center"><button><Theme /></button></li>
                </ul>
        </div>
    );
};

export default Settings;