import React from "react";
import MyAvatar from "../../../../library/components/MyAvatar/MyAvatar";
import GlowCircle from "../../../../library/components/GlowCircle/GlowCircle";

const Hero = () => {
  return (
    <div className="relative h-[99vh] w-full -top-11" id="hero">
      
      <div className="hidden xl:block xl:absolute inset-0 justify-center items-center">
        <GlowCircle />
      </div>

      <div className="hidden xl:absolute xl:flex inset-0 justify-center items-center">
        <MyAvatar />
      </div>

      <h1 className="absolute font-bold text-[5rem] md:text-[7rem] lg:text-[10rem] bottom-64 lg:bottom-44 drop-shadow-[0_15px_15px_rgba(255,230,167,0.15)] text-center w-full pointer-events-none text-[rgb(97,20,30)]">AKSHAT JAIN</h1>

      <h1 className="text-3xl pointer-events-none w-full absolute text-[#fff] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0)] font-bold bottom-48 text-center">. . . . . . &nbsp; A PASSIONATE NAIVE</h1>

    </div>
  );
};

export default Hero;

