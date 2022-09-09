import React from "react";

export default function StartButton(props){
    return(
        <div data-testid="start-button-click">

            <div data-testid="id-01" className="start-button">
                
                <h1>{props.message}</h1>
                <div className="chord-info">Please play one key at a time</div>
                               
            </div>

        </div>
    )
}

