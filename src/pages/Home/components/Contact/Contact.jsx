import React, { useRef, useState } from "react";
import Lottie from "react-lottie";
import anime_data from "../../../../assets/anime_data.json";
import emailjs from 'emailjs-com'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email:'',
        message: "Hey! Let's catch up....",
    });

    const formRef = useRef();

    const defaulOptions = {
        loop: true,
        autoplay: true,
        animationData: anime_data,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid meet"
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
        .sendForm('service_2cfnmp2', 'template_1xacjtc', formRef.current , 'CBFW2suT-4z_xDAz0')
        .then(
            () => {
            alert('Your message was sent successfully!');
            },
            (error) => {
            alert('FAILED...', error.text);
            },
        );

        setFormData({
            name: '',
            email:'',
            message: '',
        })
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((values)=>({...values, [name]: value}));
    }

    return(
        <div id="contact" className="w-full pt-24 px-10 pb-8">
            <h1 className="text-center w-full text-teal-400 font-extrabold text-5xl sm:text-6xl">Get in Touch📧</h1>

            <div className="pt-6 w-full flex items-start justify-center flex-wrap xl:gap-8">
                <div className="md:w-[22rem] lg:w-[26rem] xl:w-[38rem] md:my-auto overflow-hidden"  >
                    <Lottie options={defaulOptions} isClickToPauseDisabled={true} />
                </div>
                <div className="w-auto justify-center items-center flex mt-12 wrap">
                    <form onSubmit={handleSubmit} ref={formRef} >
                        <fieldset className="w-[20rem] lg:w-[32rem] bg-[rgba(3,105,161,0.4)] border border-sky-900 p-4 rounded-md text-lg">
                        
                        <div>
                            <label className="font-semibold text-blue-100">Name</label>
                            <input type="name" name="name" className="py-1 px-2 text-lg rounded-md bg-gray-200 text-black w-full" placeholder="Name" onChange={handleChange} value={formData?.name} required 
                            autoComplete="off" />
                        </div>
                        
                        <div className="mt-2">
                            <label className="font-semibold text-blue-100">Email</label>
                            <input type="email" name="email" className="py-1 px-2 text-lg rounded-md bg-gray-200 text-black w-full" placeholder="Email" onChange={handleChange} value={formData?.email} required autoComplete="off" />
                        </div>

                        <div className="mt-2">
                            <label className="font-semibold text-blue-100">Message</label>
                            <textarea name="message" className="py-1 px-2 text-lg rounded-md bg-gray-200 text-black w-full min-h-56 resize-none whitespace-pre-wrap text-wrap" value={formData?.message} onChange={handleChange} placeholder="Your message" autoComplete="off" />
                        </div>

                        <button type="submit" className="w-full text-white font-[500] py-1 mt-4 bg-sky-700 rounded-md">Send Message</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;