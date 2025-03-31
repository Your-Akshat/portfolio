import React from "react";
import linkedin from "../../../assets/social_icons/linkedin.png"
import github from "../../../assets/social_icons/github.png"
import leetcode from "../../../assets/social_icons/leetcode.png"
import mail from "../../../assets/social_icons/mail.png"
import whatsapp from "../../../assets/social_icons/whatsapp.png"

const Footer = () => {
    return(
        <div className="w-full bottom-0 text-[#c9c9c9] text-center font-bold pt-4 pb-4 px-6 bg-[#212121]">
            <div>
                <h1 className="text-3xl">Profile Links</h1>

                <div className="flex gap-12 justify-center flex-row items-center mt-8">
                    <a href="https://www.linkedin.com/in/akshat-jain-69a751258/" target="_blank" rel="noreferrer noopener">
                        <img src={linkedin} className="h-8" alt="Mail" />
                    </a>
                    <a href="https://github.com/Your-Akshat" target="_blank" rel="noreferrer noopener">
                        <img src={github} className="h-8" alt="Mail" />
                    </a>
                    <a href="mailto:officially11akshat@gmail.com" target="_blank" rel="noreferrer noopener">
                        <img src={mail} className="border border-white h-8 rounded-md" alt="Mail" />
                    </a>
                    <a href="https://leetcode.com/u/Your_Akshat/" target="_blank" rel="noreferrer noopener">
                        <img src={leetcode} className="h-8" alt="Mail" />
                    </a>
                    <a href="https://wa.me/919664263934" target="_blank" rel="noreferrer noopener">
                        <img src={whatsapp} className="h-8" alt="Mail" />
                    </a>
                </div>
            </div>

            <hr className="h-[2px] bg-white mt-6 mb-3" />

            <span> &#169; Website designed and maintained by <a href="mailto:officially11akshat@gmail.com" target="_blank" rel="noreferrer noopener"> Akshat Jain </a> </span>

        </div>
    )
}

export default Footer;