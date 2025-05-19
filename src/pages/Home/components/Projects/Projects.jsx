import React from "react";
import Card from "../../../../library/commons/Card/Card"

const Projects = () => {
    return(
        <div id="projects" className="w-full py-24 px-10">
            <h1 className="text-center w-full text-5xl sm:text-6xl font-extrabold text-teal-400">Projects🗂️</h1>

            <div className="pt-12 w-full flex items-center justify-evenly gap-8 flex-wrap">
                <div className="w-[30rem] h-fit sm:h-[18rem]">
                    <Card
                        title={"Portfolio Website"}
                        subtitle={"A portfolio website to showcase who I am"}
                        body={[
                            "Built a portfolio website using React.js, TailwindCSS, daisyUI and EmailJS to showcase projects and technical expertise.",
                            "Designed & implemented an interface leveraging reusable components and responsive design.",
                        ]}
                        link={"/#hero"}
                        linkText={"Visit the website"}
                    />
                </div>

                <div className="w-[30rem] h-fit sm:h-[18rem]">
                    <Card
                        title={"Travelite"}
                        subtitle={"An Easy-To-Use Expense-Splitting Platform"}
                        body={[
                            "Designed and developed a platform for group tours to manage and split expenses efficiently.",
                            "Used HTML, TailwindCSS, and JavaScript to create a responsive, user-friendly interface, achieving a perfect 100/100 Lighthouse Score."
                        ]}
                        link={"https://travelite-peach.vercel.app/"}
                        linkText={"Visit the website"}
                    />
                </div>
                
                <div className="w-[30rem] h-fit sm:h-[18rem]">
                    <Card
                        title={"Chinar Public School"}
                        subtitle={"A Proposal Website For A School"}
                        body={[
                            "Crafted a proposal website as a tribute to my alma mater, demonstarting foundational front-end development skills.",
                            "Designed and developed a web interface, showcasing proficiency in HTML and CSS principles."
                        ]}
                        link={"https://chinar-public-school.vercel.app/"}
                        linkText={"Visit the website"}
                    />
                </div>
            </div>
        </div>
    );
};

export default Projects;