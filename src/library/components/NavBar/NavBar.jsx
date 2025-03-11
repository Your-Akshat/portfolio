import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="w-full sticky top-0 z-50 text-[#ff9923] font-bold flex justify-between py-6 px-9">
            <div>
                abczyx
            </div>
            <div>
                <a href="#hero" className="px-4">Home</a>
                <a href="#about" className="px-4">About</a>
                <a href="#experience" className="px-4">Experience</a>
                <a href="#academics" className="px-4">Academics</a>
                <a href="#projects" className="px-4">Projects</a>
                <a href="#skills" className="px-4">Skills</a>
                <a href="#certificates" className="px-4">Certificates</a>
                <a href="#contact" className="px-4">Contact</a>
                <button className="btn btn-accent">Accent</button>
            </div>
        </div>
    )
}

export default NavBar;