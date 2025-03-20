import React from "react";
import Card from "../../../../library/commons/Card/Card";
import ResumeButton from "../../../../library/components/ResumeButton/ResumeButton"

const Experience = () =>{

    return(
        <div id="experience" className="w-full pt-24 pb-20" >
            <h1 className="text-center w-full text-6xl font-extrabold text-teal-400">Experience📈</h1>

            <div className="pt-12 w-full flex items-center justify-center">
                <Card
                width={"60rem"}
                title={"Web Developer Intern"}
                subtitle={"@The Golden Era Of Jainism (Nov'24 - present)"}
                body={["Collaborating with a team of professional developers to build the organization’s website from scratch, focusing on both the admin panel and user-facing features for a platform offering information on Jain temples, literature,blogs, and history.", 
                "Designing and implementing admin panel pages, integrating APIs, and enhancing functionality for both the admin panel and user-facing website, improving overall performance and user experience.",
                "Developing responsive, user-friendly web pages using React.js, JavaScript, SCSS, and MUI, ensuring seamless cross-device functionality and intuitive navigation."]} 
                />
            </div>

            <div className="w-full pt-16 flex justify-center items-center">
                <ResumeButton />
            </div>

        </div>
    )
}

export default Experience;