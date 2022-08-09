import React from "react";

export default function StartButton(props){
    return(
        <div>
            <div className="startButton" onClick={props.focus}>{props.message}</div>
        </div>
    )
}