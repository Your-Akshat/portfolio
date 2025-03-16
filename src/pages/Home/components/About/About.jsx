import React from "react";

const About = () => {
    return (
        <div className="relative w-full h-screen py-16" id="about">
            <h1 className="text-center w-full text-6xl font-extrabold text-teal-600">About Me🚀</h1>

            <div className="flex justify-evenly items-center px-12 py-10">

                <div className="w-1/3" >
                    <img src={pic} alt="imageElement" className="rounded-3xl" />
                </div>

                <div className="w-2/3" >
                    <div>
                        <span className="font-semibold text-4xl">What Drives Me?</span>
                    
                        <ul className="pt-4 text-lg">
                            <li className="pb-4">✨<b>Creative Development</b> – I enjoy crafting modern web applications with interactive and engaging features.</li>
                            <li className="pb-4">🌟<b>Problem-Solving Mindset</b> – Challenges excite me! I approach complex problems analytically, always seeking efficient solutions.</li>
                            <li className="pb-4">📚<b>Lifelong Learning</b> – Whether it’s mastering React.js, exploring AI/ML (RNNs), or keeping up with emerging tech, I constantly expand my skill set.</li>
                            <li className="pb-4">🏆<b>Academic Excellence</b> – I ranked in the top percentile of JEE Mains, showcasing my analytical and mathematical strengths (100/100 in CBSE Class 10 Math).</li>
                        </ul>
                    </div>

                    <div className="pt-8">
                        <span className="font-semibold text-4xl mt-8">Beyond Tech</span>
                        
                        <p className="pt-4 text-lg">✍I’m enthusiastic about literature and actively involved in poetry. I have participated in events like <b>Avlekha</b> and have had my poems published in the monthly magazine <i>Poem Nazm Aur Hum</i>, blending creativity with expression.</p>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default About;