import React from "react";

const Card = ({ title, subtitle, body, linkText, link }) => {
    return (
        <div className="w-full h-full">
            <div className="card bg-amber-300 text-red-950 hover:bg-[#f5ca3c] hover:-translate-y-4 hover:shadow-2xl hover:shadow-[rgba(245,202,60,0.6)] w-full h-full">
                <div className="card-body flex-grow">
                    <h2 className="text-center text-xl font-semibold">{title}</h2>
                    <h3 className="text-center text-lg font-semibold">{subtitle}</h3>
                    {body.length === 1 ? (
                        <div className="text-lg text-center">
                            <p>{body?.map((item) => item)}</p>
                        </div>
                    ) : (
                        <ul className="text-lg list-disc list-inside">
                            {body?.map((item) => 
                                <li key={item}>{item}</li>
                            )}
                        </ul>
                    )}
                    <span className="text-center underline text-blue-800 text-sm">
                        <a href={link} target={link === "/#hero" ? "_self" : "_blank"} rel="noreferrer noopener">{linkText}</a>
                    </span>
                </div>
            </div>
        </div>
    );
};


export default Card;