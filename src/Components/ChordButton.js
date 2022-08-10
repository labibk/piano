import React from "react";

export default function ChordButton(props){
    return(
        <div>
            <div className="chordButton" onClick={props.changeChord}>Current Chord is {props.chord}</div>
        </div>
    )
}