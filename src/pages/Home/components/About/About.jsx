import React from "react";
import pic from "../../../../assets/pic.png"

const About = () => {
    return (
        <div className="relative w-full h-screen py-24" id="about">
            <h1 className="text-center w-full text-6xl font-extrabold text-teal-400">About Me🚀</h1>

            <div className="flex justify-evenly items-center px-20 py-12 text-yellow-200">

                <div className="w-1/3" >
                    <img src={pic} alt="imageElement" className="rounded-3xl w-96" />
                </div>

                <div className="w-2/3" >
                    <div>
                        <span className="font-bold text-4xl">What Drives Me <span className="text-5xl">?</span></span>
                    
                        <ul className="pt-4 text-lg">
                            <li className="pb-4">✨<b> Creative Development</b> – I enjoy crafting modern web applications with interactive and engaging features.</li>
                            <li className="pb-4">🌟<b> Problem-Solving Mindset</b> – Challenges excite me! I approach complex problems analytically, always seeking efficient solutions.</li>
                            <li className="pb-4">📚<b> Lifelong Learning</b> – Whether it’s mastering React.js or diving deep into concepts of Data Structures and Algorithms, I constantly expand my skill set.</li>
                            <li className="pb-4">🏆<b> Academic Excellence</b> – I ranked in the top percentile of JEE Mains, demonstrating my strong analytical and problem-solving abilities.</li>
                        </ul>
                    </div>

                    <div className="pt-8">
                        <span className="font-bold text-4xl mt-8">Beyond Tech</span>
                        
                        <p className="pt-4 text-lg">✍ I’m enthusiastic about literature and actively involved in poetry. I have participated in events like <span className="font-semibold">Avlekha</span> and have had my poems published in the monthly magazine <i>Poem Nazm Aur Hum</i>, blending creativity with expression.</p>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default About;