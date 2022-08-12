import React from "react";

export default function Cards(props) {
    return (
        <div>
            <div>

                <h1 className="chord-info">{props.chord}</h1>

            </div>

            <div className="chord-info">
                <span>Some info</span>
                <span> More info</span>
            </div>

        </div>
    )
}