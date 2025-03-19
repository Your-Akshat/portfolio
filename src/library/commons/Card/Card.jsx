import React from "react";
import { Link } from "react-router-dom";

const Card = ({width, title, subtitle, body, link, linkText, route}) => {
    return(
        <div>
                <div className="card bg-amber-300 text-red-950 hover:bg-[#f5ca3c] hover:-translate-y-4 hover:shadow-2xl hover:shadow-[rgba(245,202,60,0.6)]" style={{ width: width }} >
                    <Link to={route}>
                        <div className="card-body text-justify">
                            <h2 className="card-title justify-center text-xl font-semibold">{title}</h2>
                            <h3 className="card-title justify-center text-lg font-semibold">{subtitle}</h3>
                            {body.length === 1 ? (
                                <div className="text-lg text-center">
                                    <p>{body?.map((item)=>item)}</p>
                                </div>
                            ) : (
                            <ul className="text-lg list-disc list-inside">
                                {body?.map((item) => 
                                    <li>{item}</li>
                                )}
                            </ul>
                            )}
                            <a href={link}>{linkText}</a>
                        </div>
                    </Link>
                </div>
        </div>
    )
}

export default Card;