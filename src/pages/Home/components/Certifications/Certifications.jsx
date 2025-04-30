import React from "react";
import Card from "../../../../library/commons/Card/Card";

const Certifications = () => {
    return(
        <div id="certificates" className="w-full pt-24 pb-16 px-10">
            <h1 className="w-full text-6xl text-center font-extrabold text-teal-400">Certifications and Achievements🏆</h1>

            <div className="pt-12 flex gap-8 justify-evenly items-center flex-wrap w-full">
                <div className="w-[35rem]">
                    <Card 
                        title={"The 2022 ICPC Asia Mathura Kanpur Regional Contest"}
                        subtitle={"Certificate of Achievement"}
                        body={["Participated in the 2022 ICPC Asia Mathura Kanpur Regional Contest as a team, showcasing a perfect combination of rigorous coding skills and exceptional team spirit"]}
                        linkText={"View Certificate"}
                        link={"https://drive.google.com/file/d/1PXnvbTr6zjJgU-ABijSMKKocfbPj3NM1/view?usp=drive_link"}
                    />
                </div>

                <div  className="w-[35rem]">
                    <Card 
                        title={"Gen AI Mastermind by Outskill"}
                        subtitle={"Certificate of Completion"}
                        body={["Completed a two-day Generative AI Mastermind conducted by Outskill, focusing on the application of AI tools for daily activities and an introduction to automation"]}
                        linkText={"View Certificate"}
                        link={"https://drive.google.com/file/d/1ohw0i_RZXmxh5CE_QZVmZf4QCDdEMRBg/view?usp=drive_link"}
                    />
                </div>

                <div className="w-[35rem]">
                    <Card 
                        title={"CBSE Secondary School Examination 2020"}
                        subtitle={"Certificate of Merit"}
                        body={["Awarded a Certificate of Merit for achieving a perfect score of 100/100 in Mathematics (Standard) in the Class 10 Board Examinations"]}
                        linkText={"View Certificate"}
                        link={"https://drive.google.com/file/d/1AleoJcSAZiM7WoGpmbbLJYnTm2ctDEHF/view?usp=sharing"}
                    />
                </div>

                <div className="w-[35rem] h-[14.5rem]">
                    <Card 
                        height={"14.5rem"}
                        title={"Avlekha, Stavya 2024"}
                        subtitle={"Winner - Poetry Competition"}
                        body={["Secured 1st place in the Poetry Competition 'Avlekha' held during Stavya 2024, the cultural fest at IIIT Vadodara"]}
                    />
                </div>
            </div>
        </div>
    );
};

export default Certifications;
