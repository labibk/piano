import React from "react";

export default function StartButton(props){
    return(
        <div data-testid="start-button-1" onClick={props.focus}>
            <div data-testid="start-button-2" className="start-button">{props.message}</div>
        </div>
    )
}

