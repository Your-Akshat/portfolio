import React from "react";
import Card from "../../../../library/commons/Card/Card"

const Projects = () => {
    return(
        <div id="projects" className="w-full py-24 px-10">
            <h1 className="text-center w-full text-6xl font-extrabold text-teal-400">Projects✨</h1>

            <div className="pt-12 w-full flex items-center justify-evenly gap-8 flex-wrap">
                <div>
                    <Card
                        width={"30rem"}
                        title={"Portfolio Website"}
                        subtitle={"A portfolio website to showcase who I am"}
                        body={[
                            "Crafted a responsive website tailored to potray everything one needs to know about me professionally",
                            "Used DaisyUI along with tailwindCSS and React.js for smooth design flow",
                        ]}
                        link={"/"}
                        linkText={"website"}
                    />
                </div>
                <div>
                    <Card
                        width={"30rem"}
                        title={"Portfolio Website"}
                        subtitle={"A portfolio website to showcase who I am"}
                        body={[
                            "Crafted a responsive website tailored to potray everything one needs to know about me professionally",
                            "Used DaisyUI along with tailwindCSS and React.js for smooth design flow",
                        ]}
                        link={"/"}
                        linkText={"website"}
                    />
                </div>
                <div>
                    <Card
                        width={"30rem"}
                        title={"Portfolio Website"}
                        subtitle={"A portfolio website to showcase who I am"}
                        body={[
                            "Crafted a responsive website tailored to potray everything one needs to know about me professionally",
                            "Used DaisyUI along with tailwindCSS and React.js for smooth design flow",
                        ]}
                        link={"/"}
                        linkText={"website"}
                    />
                </div>
                <div>
                    <Card
                        width={"30rem"}
                        title={"Portfolio Website"}
                        subtitle={"A portfolio website to showcase who I am"}
                        body={[
                            "Crafted a responsive website tailored to potray everything one needs to know about me professionally",
                            "Used DaisyUI along with tailwindCSS and React.js for smooth design flow",
                        ]}
                        link={"/"}
                        linkText={"website"}
                    />
                </div>
                <div>
                    <Card
                        width={"30rem"}
                        title={"Portfolio Website"}
                        subtitle={"A portfolio website to showcase who I am"}
                        body={[
                            "Crafted a responsive website tailored to potray everything one needs to know about me professionally",
                            "Used DaisyUI along with tailwindCSS and React.js for smooth design flow",
                        ]}
                        link={"/"}
                        linkText={"website"}
                    />
                </div>
            </div>
        </div>
    );
};

export default Projects;