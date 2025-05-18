import React from "react";
import Card from "../../../../library/commons/Card/Card";

const Academics = () =>{
    return(
        <div id="academics" className="w-full py-24" >
            <h1 className="text-center w-full text-6xl font-extrabold text-teal-400">Academics🎓</h1>

            <div className="hidden pt-12 w-full sm:flex items-center justify-center">
                <ul className="timeline timeline-vertical">
                    <li>
                        <div className="timeline-start md:w-[22rem] lg:w-[28rem] xl:w-[32rem]">
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
                        <div className="timeline-end md:w-[22rem] lg:w-[28rem] xl:w-[32rem]">
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
                        <div className="timeline-start md:w-[22rem] lg:w-[28rem] xl:w-[32rem]">
                            <Card 
                                title={"Secondary/Class-X (CBSE)"}
                                subtitle={"Chinar Public School, Alwar(Raj.)"}
                                body={["Percentage: 93.4%"]}
                            />
                        </div>
                    </li>
                </ul>
            </div>

            <div className="sm:hidden pt-12 w-full items-center justify-center">
                <ul className="list-disc pl-12 pr-6 text-amber-400">
                    <li className="py-2">
                        <div>
                            <span className="text-2xl font-semibold text-amber-300">B.Tech - Electronics & Communication Engineering</span><br />
                            <span className="text-lg font-semibold text-amber-400">Indian Institute of Information Technology(IIIT) Kota</span><br />
                            <span className="font-normal text-amber-300">Current CGPA: 8.29</span>
                        </div>
                    </li>
                    <li className="py-2">
                        <div>
                            <span className="text-2xl font-semibold text-amber-300">Higher Secondary/ Class-XII (CBSE)</span><br />
                            <span className="text-lg font-semibold text-amber-400">Chinar Public School, Alwar(Raj.)</span><br />
                            <span className="font-normal text-amber-300">Percentage: 92.6%</span>
                        </div>
                    </li>
                    <li className="py-2">
                        <div>
                            <span className="text-2xl font-semibold text-amber-300">Secondary/ Class-X (CBSE)</span><br />
                            <span className="text-lg font-semibold text-amber-400">Chinar Public School, Alwar(Raj.)</span><br />
                            <span className="font-normal text-amber-300">Percentage: 93.4%</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Academics;