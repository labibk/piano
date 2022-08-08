import React from "react";
import ColorChanger from "./Components/ColorChanger"



export default function App() {

    const myStyle = {
        height: "800px",
        backgroundColor: `rgb(${180}, ${180}, 255)`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
    }


    return (
        <div>
            <div style={myStyle} className="background-img">
                <ColorChanger />
            </div>
        </div>
    )
}