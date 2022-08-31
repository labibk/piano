import React from "react";

export default function ChordButton(props) {
    return (
        <div>
            <div className="chord-button" onClick={props.changeChord}>Press to change the Chord Progression</div>
            <div className="chord-button"> {props.errorMsg}</div>
        </div>
    )
}