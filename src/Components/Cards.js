import React from "react";
import Array from "../Array";

export default function Cards(props) {

    const info = Array

    return (
        <div >
            <div>
                <h1 className="cards-div">Chord Information</h1>
                <h1 className="chord-info">{props.chord}</h1>
                <span className="chord-info">{info[props.chord][10]}</span>
            </div>
        </div>
    )
}