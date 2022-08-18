import React from "react";

export default function StartButton(props){
    return(
        <div onClick={props.focus}>
            <div className="startButton">{props.message}</div>
        </div>
    )
}