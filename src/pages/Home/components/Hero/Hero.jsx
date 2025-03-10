import React from "react";
import MyAvatar from "../../../../library/components/MyAvatar/MyAvatar";
import GlowCircle from "../../../../library/components/GlowCircle/GlowCircle";
import ResumeButton from "../../../../library/components/Button/ResumeButton";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      
      {/* Bottom Layer: Glow Circle */}
      <div className="absolute inset-0 z-0">
        <GlowCircle />
      </div>

      {/* Middle Layer: 3D Avatar */}
      <div className="absolute inset-0 z-10 flex justify-center items-center">
        <MyAvatar />
      </div>

      {/* Top Layer: Name */}
      <h1 className="absolute z-20 text-[10rem] font-bold bottom-44 drop-shadow-[0_15px_15px_rgba(0,0,0)] text-center w-full pointer-events-none text-teal-500">AKSHAT JAIN</h1>

      <h1 className="z-20 text-3xl pointer-events-none w-full absolute text-yellow-500 font-bold bottom-48 text-center">. . . . . . . .  &nbsp; A PASSIONATE NAIVE</h1>
      
      <div className="absolute w-full z-[20] bg-white bottom-36 flex justify-center font-bol">
        <Link to={"https://drive.google.com/file/d/1qFx_b4-rt9tVT_Otzj9PRlK3xPCOgWwx/view"} target="_blank">
          <ResumeButton />
        </Link>
      </div>

    </div>
  );
};

export default Hero;

