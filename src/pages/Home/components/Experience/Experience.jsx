import React from "react";
import Card from "../../../../library/commons/Card/Card";
import ResumeButton from "../../../../library/components/ResumeButton/ResumeButton"

const Experience = () =>{

    return(
        <div id="experience" className="w-full pt-24 pb-16" >
            <h1 className="text-center w-full text-5xl sm:text-6xl font-extrabold text-[#3d0008]">Experience📈</h1>

            <div className="pt-12 w-full flex items-center justify-center">
                <div className="w-80 md:w-[45rem] lg:w-[60rem]">
                    <Card
                    title={"Frontend Developer Intern & Volunteer"}
                    subtitle={"@GEO Jainism (Nov'24 - present | Internship: Jun'25 - Jul'25)"}
                    body={["Collaborating with a team of professional developers to build the organization’s website from scratch, focusing on both the admin panel and user-facing features for a platform offering information on Jain temples, literature, blogs, and history.", 
                    "Designing and implementing admin panel pages, integrating APIs, and enhancing functionality for both the admin panel and user-facing website, improving overall performance and user experience.",
                    "Developing responsive, user-friendly web pages using React.js, JavaScript, SCSS, and MUI, ensuring seamless cross-device functionality and intuitive navigation.",
                    "Implemented Firebase Authentication integration in the admin panel having Role-Based Access Control (RBAC) and Attribute-Based Access Control (ABAC), enhancing secure data access and user permission management."]} 
                    linkText={"Visit the website"}
                    link={"https://www.geojainism.com"}
                    />
                </div>
            </div>

            <div className="w-full pt-16 flex justify-center items-center">
                <ResumeButton link={"https://drive.google.com/file/d/1n1aDj4ELF1a-751c6OfWBcuttB2v6syX/view?usp=sharing"} />
            </div>

        </div>
    )
}

export default Experience;