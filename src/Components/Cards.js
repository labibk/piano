import React from "react";
import Array from "../Array";

export default function Cards(props) {

    const info = Array

    return (
        <div>
            <div>

                <h1 className="chord-info">{props.chord}</h1>

            </div>

            <div className="chord-info">
                <span>{info[props.chord][2]}</span>
                <span> , More info</span>
            </div>

        </div>
    )
}