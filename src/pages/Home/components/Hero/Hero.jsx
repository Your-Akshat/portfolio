import React from "react";
import './hero.css';
import MyAvatar from "../../../../library/components/MyAvatar";

const Hero = () => {
    return (
        <div className="relative h-screen w-full overflow-hidden flex justify-center items-center bg-gray-950">
            
            {/* 3D Animation as the Background */}
            <div className="absolute top-0 w-full h-full z-0">
                <MyAvatar />
            </div>
            
            {/* Name in the Foreground */}
            <h1 className="name relative z-50 text-[10rem] pointer-events-none text-yellow-900 font-bold top-24 drop-shadow-[0_35px_35px_rgba(365,365,365,.25)]">
                AKSHAT JAIN
            </h1>
            
        </div>
    );
};

export default Hero;
