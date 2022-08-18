import React from "react";

export default function ChordButton(props){
    return(
        <div>
            <div className="chordButton" onClick={props.changeChord}>Press to change the Chord</div>
        </div>
    )
}