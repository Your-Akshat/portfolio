// import React from "react";
// import MyAvatar from "../../../../library/components/MyAvatar/MyAvatar";
// import GlowCircle from "../../../../library/components/GlowCircle/GlowCircle";

// const Hero = () => {
//   return (
//     <div className="relative h-screen w-full overflow-hidden flex justify-center items-center">
      
//       {/* 3D Animation as the Background */}
//       <div className="absolute top-0 w-full h-full z-10">
//         <MyAvatar />
//       </div>
      
//       {/* Glow Circle with appropriate z-index */}
//       <div className="absolute top-0 w-full h-full z-0">
//         <GlowCircle />
//       </div>

//       {/* Name in the Foreground */}
//       <h1 className="absolute z-20 text-[10rem] pointer-events-none font-bold bottom-44 drop-shadow-[0_35px_35px_rgba(365,365,365,0.5)] text-center w-full">
//         <span className="text-yellow-500">A</span>
//         <span className="text-green-500">K</span>
//         <span className="text-indigo-500">S</span>
//         <span className="text-purple-500">H</span>
//         <span className="text-pink-500">A</span>
//         <span className="text-yellow-500">T</span> 
//         <span className="text-green-500"> J</span>
//         <span className="text-indigo-500">A</span>
//         <span className="text-purple-500">I</span>
//         <span className="text-pink-500">N</span>
//       </h1>
//     </div>
//   );
// };

// export default Hero;





import React from "react";
import MyAvatar from "../../../../library/components/MyAvatar/MyAvatar";
import GlowCircle from "../../../../library/components/GlowCircle/GlowCircle";

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
      <h1 className="absolute z-20 text-[10rem] font-bold bottom-44 
                     drop-shadow-[0_15px_15px_rgba(255,255,255,0.7)] 
                     text-center w-full pointer-events-none">
        <span className="text-yellow-500">A</span>
        <span className="text-green-500">K</span>
        <span className="text-indigo-500">S</span>
        <span className="text-purple-500">H</span>
        <span className="text-pink-500">A</span>
        <span className="text-yellow-500">T</span> 
        <span className="text-green-500"> J</span>
        <span className="text-indigo-500">A</span>
        <span className="text-purple-500">I</span>
        <span className="text-pink-500">N</span>
      </h1>
      
    </div>
  );
};

export default Hero;

