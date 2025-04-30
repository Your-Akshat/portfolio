import React from "react";
import Card from "../../../../library/commons/Card/Card";

const Academics = () =>{
    return(
        <div id="academics" className="w-full py-24" >
            <h1 className="text-center w-full text-6xl font-extrabold text-teal-400">Academics🎓</h1>

            <div className="pt-12 w-full flex items-center justify-center">
                <ul className="timeline timeline-vertical">
                    <li>
                        <div className="timeline-start w-[32rem]">
                            <Card 
                                title={"B.Tech - Electronics & Communication Engineering"}
                                subtitle={"Indian Institute of Information Technology(IIIT) Kota"}
                                body={["Current CGPA: 8.29"]}
                            />
                        </div>
                        <hr className="bg-amber-500 my-0 mx-2"/>
                    </li>
                    <li>
                        <hr className="bg-amber-500 mx-2"/>
                        <div className="timeline-end w-[32rem]">
                            <Card 
                                title={"Higher Secondary/Class-XII (CBSE)"}
                                subtitle={"Chinar Public School, Alwar(Raj.)"}
                                body={["Percentage: 92.6%"]}
                            />
                        </div>
                        <hr className="bg-amber-500 mx-2"/>
                    </li>
                    <li>
                        <hr className="bg-amber-500 mx-2" />
                        <div className="timeline-start w-[32rem]">
                            <Card 
                                title={"Secondary/Class-X (CBSE)"}
                                subtitle={"Chinar Public School, Alwar(Raj.)"}
                                body={["Percentage: 93.4%"]}
                            />
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Academics;