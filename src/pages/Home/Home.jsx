import React from "react";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";

const Home = () => {
    return(
        <div className="bg-sky-950">
            <Hero />
            <About />
        </div>
    )
}

export default Home;