import React, { useState } from "react";
import Lottie from "react-lottie";
import anime_data from "../../../../assets/anime_data.json";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [formData, setFormData] = useState({message: "I want to connect"});

    const defaulOptions = {
        loop: true,
        autoplay: true,
        animationData: anime_data,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid meet"
        }
    }

    const sendMail = (e) =>{
        e.preventDefault();

        // emailjs
        //     .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData.current, {
        //         publicKey: 'YOUR_PUBLIC_KEY',
        //     })
        //     .then(
        //         () => {
        //         console.log('SUCCESS!');
        //         },
        //         (error) => {
        //         console.log('FAILED...', error.text);
        //         },
        //     );

        console.log(formData)
    };


    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData((values)=>({...values, [name]: value}));
    }

    return(
        <div id="contact" className="w-full py-24 px-10">
            <h1 className="text-center w-full text-teal-400 font-extrabold text-6xl">Contact📧</h1>

            <div className="pt-12 w-full flex items-start justify-evenly gap-8 flex-wrap">
                <div className="w-[35rem] overflow-hidden"  >
                    <Lottie options={defaulOptions} isClickToPauseDisabled={true} />
                </div>
                <div className="w-[40rem] justify-center items-center flex mt-8">
                    <form onSubmit={sendMail}>
                        <fieldset className="fieldset w-[25rem] bg-base-200 border border-base-300 p-4 rounded-box text-lg">
                        
                        <label className="fieldset-label">Name</label>
                        <input type="name" name="name" className="input bg-gray-200 text-black w-full" placeholder="Name" onChange={handleChange} required />
                        
                        <label className="fieldset-label">Email</label>
                        <input type="email" name="email" className="input bg-gray-200 text-black w-full" placeholder="Email" onChange={handleChange} required />
                        
                        <label className="fieldset-label">Message</label>
                        <textarea name="message" className="input bg-gray-200 text-black w-full min-h-56 resize-none whitespace-pre-wrap text-wrap" value={formData?.message} onChange={handleChange} />
                        
                        <button type="submit" className="btn btn-neutral mt-4">Send</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;