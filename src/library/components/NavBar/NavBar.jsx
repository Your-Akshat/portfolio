import React, { useState, useEffect, useRef } from "react";
import './Navbar.css'

const NavBar = () => {

    const [open, setIsOpen] = useState(false);
    const menuRef = useRef(null);
    const hamburgerRef = useRef(null)

    const hamburgerButtonClick = () => {
        setIsOpen(!open);
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                open &&
                menuRef.current &&
                !menuRef.current.contains(event.target) &&
                hamburgerRef.current &&
                !hamburgerRef.current.contains(event.target)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, [open]);


    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <div className="w-full sticky top-0 z-50 text-[#ff9923] font-bold bg-[rgba(49,79,99,0.5)]">
            <div className="flex justify-between py-6 px-9">
                <div className="text-sky-200 text-2xl">
                    <a href="/">Your_Akshat</a>
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
                    <div ref={hamburgerRef} className={`hamburger lg:hidden ${open ? "open" : ""}`} onClick={hamburgerButtonClick}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>

            <div ref={menuRef} className={`lg:hidden text-center w-full font-bold text-xl text-sky-800 bg-[rgb(255,219,112)] ${open ? "block" : "hidden"}`}>
                <ul>
                    <li className="py-1"><a href="#hero" onClick={handleLinkClick}>Home</a></li>
                    <li className="py-1"><a href="#about" onClick={handleLinkClick}>About</a></li>
                    <li className="py-1"><a href="#experience" onClick={handleLinkClick}>Experience</a></li>
                    <li className="py-1"><a href="#academics" onClick={handleLinkClick}>Academics</a></li>
                    <li className="py-1"><a href="#projects" onClick={handleLinkClick}>Projects</a></li>
                    <li className="py-1"><a href="#skills" onClick={handleLinkClick}>Skills</a></li>
                    <li className="py-1"><a href="#certificates" onClick={handleLinkClick}>Certificates</a></li>
                    <li className="py-1"><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar;