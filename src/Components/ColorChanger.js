import React from "react";

export default function colorChanger(props) {
    return (
        <div>
            <input ref={props.inputRef} onKeyDown={props.changeColor} className="inputColor"></input>
        </div>
    )
}

