import React from "react";

const Footer = () => {
    return(
        <div className="w-full bottom-0 text-[#c9c9c9] text-center font-bold pt-6 pb-4 px-6 bg-[#212121]">
            <div>
                <h1 className="text-3xl">Profile Links</h1>
                <div className="flex gap-12 justify-center flex-row items-center">
                    <img src="" />
                </div>
            </div>

            <hr className="h-[2px] bg-white my-3" />

            <span> &#169; Website designed and maintained by <a href="mailto:officially11akshat@gmail.com" target="_blank"> Akshat Jain </a> </span>

        </div>
    )
}

export default Footer;