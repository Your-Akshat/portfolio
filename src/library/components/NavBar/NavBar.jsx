import React, { useState, useEffect, useRef } from "react";
import './Navbar.css'

const NavBar = () => {

    const [open, setIsOpen] = useState(false);
    const menuRef = useRef(null);
    // const buttonRef = useRef(null);

    const sections = ["hero", "about", "experience", "academics", "projects", "skills", "certificates", "contact"];

    const hamburgerButtonClick = () => {
        setIsOpen(!open);
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                open &&
                menuRef.current &&
                !menuRef.current.contains(event.target) 
                // &&
                // buttonRef.current &&
                // !buttonRef.current.contains(event.target)
            ) {
                setIsOpen(false);
            }
        };
        
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [open]);

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <div className="w-full sticky top-0 z-50 text-[#ff9923] font-bold bg-[rgba(8,48,75,0.5)]">
            <div className="flex justify-between py-6 px-9">
                <div className="text-sky-200 text-2xl">
                    <a href="#hero">Your_Akshat</a>
                </div>
                <div>
                    <div className="hidden lg:block">
                        <a href="#hero" className="px-4">Home</a>
                        <a href="#about" className="px-4">About</a>
                        <a href="#experience" className="px-4">Experience</a>
                        <a href="#academics" className="px-4">Academics</a>
                        <a href="#projects" className="px-4">Projects</a>
                        <a href="#skills" className="px-4">Skills</a>
                        <a href="#certificates" className="px-4">Certificates</a>
                        <a href="#contact" className="px-4">Contact</a>
                    </div>
                    <div className="hamburger lg:hidden" onClick={hamburgerButtonClick}>
                        <div></div>
                    </div>
                </div>
            </div>
            
            <div ref={menuRef} className={`lg:hidden transition-all duration-300 ease-in-out ${open ? "block" : "hidden"} w-2/5 right-0 absolute pr-12 pl-4 text-right text-xl bg-[rgba(8,48,75,0.8)]`}>
                <ul>
                    {sections.map( (section) => (
                        <li key={section} className="py-2">
                            <a href={`#${section}`} onClick={handleLinkClick}>
                                {section.charAt(0).toUpperCase() + section.slice(1)}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default NavBar;