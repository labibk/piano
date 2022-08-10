import React from "react";
import MusicPlayer from "./MusicPlayer";

export default function colorChanger(props) {
    return (
        <div>
            <input ref={props.inputRef} onKeyPress={props.changeColor} onKeyUp={props.stopMusic} className="inputColor"></input>
            <MusicPlayer />
        </div>
    )
}

