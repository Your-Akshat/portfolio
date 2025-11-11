import React from "react";
import html from "../../../../assets/logos/html.png"
import css from "../../../../assets/logos/css.png"
import tailwindCSS from "../../../../assets/logos/tailwindCSS.png"
import MUI from "../../../../assets/logos/MUI.png"
import daisyui from "../../../../assets/logos/daisyui.png"
import scss from "../../../../assets/logos/scss.png"
import git from "../../../../assets/logos/git.png"
import github from "../../../../assets/logos/github.png"
import mySQL from "../../../../assets/logos/mySQL.png"
import react from "../../../../assets/logos/react.png"
import cpp from "../../../../assets/logos/cpp.png"
import JS from "../../../../assets/logos/JS.png"

const Skills = () => {
    return(
        <div id="skills" className="w-full pt-24 pb-16 px-10">
            <h1 className="text-center w-full font-extrabold text-[#3d0008] text-5xl sm:text-6xl">Skills👨🏻‍💻</h1>

            <div className="pt-16">
                <h2 className="text-[#3f2200] text-3xl  w-full text-center font-[Verdana]">The technologies, tools, and skills I work with:</h2>

                <div className="flex pt-10 w-full mx-auto md:w-4/6 gap-8">
                    <ul className="w-full flex flex-wrap gap-5 sm:gap-12 justify-center flex-row items-center">
                        <li><img src={html} alt="html" className="h-14 hover:-translate-y-2" /></li>
                        <li><img src={css} alt="css" className="h-14 hover:-translate-y-2" /></li>
                        <li><img src={scss} alt="daisyui" className="h-14 hover:-translate-y-2" /></li>
                        <li><img src={react} alt="react" className="h-14 hover:-translate-y-2" /></li>
                        <li><img src={MUI} alt="MUI" className="h-14 hover:-translate-y-2" /></li>
                        <li><img src={tailwindCSS} alt="tailwindCSS" className="h-14 hover:-translate-y-2" /></li>
                        <li><img src={daisyui} alt="daisyui" className="h-14 hover:-translate-y-2" /></li>
                        <li><img src={cpp} alt="C++" className="h-14 hover:-translate-y-2" /></li>
                        <li><img src={JS} alt="JS" className="h-14 hover:-translate-y-2" /></li>
                        <li><img src={mySQL} alt="mySQL" className="h-16 hover:-translate-y-2" /></li>
                        <li><img src={github} alt="github" className="h-14 hover:-translate-y-2" /></li>
                        <li><img src={git} alt="git" className="h-14 hover:-translate-y-2" /></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Skills;