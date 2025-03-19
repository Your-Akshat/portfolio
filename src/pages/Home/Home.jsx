import React from "react";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Academics from "./components/Academics/Academics";

const Home = () => {
    return(
        <div className="bg-sky-950">
            <Hero />
            <About />
            <Experience />
            <Academics />
        </div>
    )
}

export default Home;