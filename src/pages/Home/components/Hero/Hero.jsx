import React from "react";
import './hero.css'
import MyAvatar from "../../../../library/components/MyAvatar";

const Hero = () => {
    return(
        <div className="hero_section">
            <h1 className="name">AKSHAT JAIN</h1>
            <MyAvatar className="avatar" />
        </div>
    )
}

export default Hero;