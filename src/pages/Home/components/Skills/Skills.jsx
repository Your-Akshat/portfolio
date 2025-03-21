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
            <h1 className="text-center w-full font-extrabold text-teal-400 text-6xl">Skills👨🏻‍💻</h1>

            <div className="pt-16">
                <h3 className="text-yellow-300 text-3xl  w-full text-center font-[Verdana]">The tools, skills and technologies I use:</h3>

                <div className="flex items-center flex-col pt-10 w-full gap-8">
                    <ul className="w-full">
                        <div className="flex gap-12 justify-center flex-row items-center">
                            <li><img src={html} alt="html" className="h-14" /></li>
                            <li><img src={css} alt="css" className="h-14" /></li>
                            <li><img src={scss} alt="daisyui" className="h-14" /></li>
                            <li><img src={react} alt="react" className="h-14" /></li>
                            <li><img src={MUI} alt="MUI" className="h-14" /></li>
                            <li><img src={tailwindCSS} alt="tailwindCSS" className="h-14" /></li>
                            <li><img src={daisyui} alt="daisyui" className="h-14" /></li>
                        </div>
                    </ul>
                    <ul className="w-full">
                        <div className="flex gap-12 justify-center flex-row items-center">
                            <li><img src={cpp} alt="C++" className="h-14" /></li>
                            <li><img src={JS} alt="JS" className="h-14" /></li>
                            <li><img src={mySQL} alt="mySQL" className="h-16" /></li>
                            <li><img src={github} alt="github" className="h-14" /></li>
                            <li><img src={git} alt="git" className="h-14" /></li>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Skills;