import React from "react";
import MusicPlayer from "./MusicPlayer";

export default function colorChanger(props) {
    return (
        <div>
            <input data-testid="input-element" ref={props.inputRef} onChange={props.changeColor} onKeyUp={props.stopMusic} className="input-color" placeholder="For Test"></input>
            <MusicPlayer />
        </div>
    )
}

