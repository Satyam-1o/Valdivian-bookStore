import React from "react";

function Card(props) {
    return (
        <div className="lg:w-1/5 md:w-1/4 p-6 w-1/2">

            <a
                className="block relative rounded overflow-hidden shadow-lg"
                style={{ aspectRatio: "2 / 3" }}
            >
                <img
                    alt={props.name}
                    className="object-cover object-center w-full h-full block"
                    src={props.imgURL}
                />
            </a>
            <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    {props.category || "Book"}
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                    {props.name}
                </h2>
                <p className="mt-1 font-semibold text-green-600">
                    ${props.cost || "Free"}
                </p>
            </div>
        </div>
    )
}

export default Card;