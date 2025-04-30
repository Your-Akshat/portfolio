import React, { useRef, useState } from "react";
import Lottie from "react-lottie";
import anime_data from "../../../../assets/anime_data.json";
import emailjs from 'emailjs-com'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email:'',
        message: "I want to connect....",
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
            <h1 className="text-center w-full text-teal-400 font-extrabold text-6xl">Get in Touch📧</h1>

            <div className="pt-6 w-full flex items-start justify-center flex-wrap xl:gap-8">
                <div className="md:w-[22rem] lg:w-[26rem] xl:w-[38rem] md:my-auto overflow-hidden"  >
                    <Lottie options={defaulOptions} isClickToPauseDisabled={true} />
                </div>
                <div className="w-auto justify-center items-center flex mt-12 wrap">
                    <form onSubmit={handleSubmit} ref={formRef} >
                        <fieldset className="fieldset w-[20rem] lg:w-[32rem] bg-[rgba(3,105,161,0.4)] border border-sky-900 p-4 rounded-box text-lg">
                        
                        <label className="fieldset-label text-base-content font-bold">Name</label>
                        <input type="name" name="name" className="input bg-gray-200 text-black w-full" placeholder="Name" onChange={handleChange} value={formData?.name} required autoComplete="off" />
                        
                        <label className="fieldset-label text-base-content font-bold">Email</label>
                        <input type="email" name="email" className="input bg-gray-200 text-black w-full" placeholder="Email" onChange={handleChange} value={formData?.email} required autoComplete="off" />
                        
                        <label className="fieldset-label text-base-content font-bold">Message</label>
                        <textarea name="message" className="input bg-gray-200 text-black w-full min-h-56 resize-none whitespace-pre-wrap text-wrap" value={formData?.message} onChange={handleChange} placeholder="Your message" autoComplete="off" />
                        
                        <button type="submit" className="btn mt-4 bg-sky-700 border border-sky-700">Send Message</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;