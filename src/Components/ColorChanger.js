import React from "react";
import MusicPlayer from "./MusicPlayer";

export default function colorChanger(props) {
    return (
        <div>
            <input ref={props.inputRef} onKeyPress={props.changeColor} onKeyUp={props.stopMusic} className="input-color"></input>
            <MusicPlayer />
        </div>
    )
}

