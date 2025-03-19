import React from "react";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";

const Home = () => {
    return(
        <div className="bg-sky-950">
            <Hero />
            <About />
            <Experience />
        </div>
    )
}

export default Home;