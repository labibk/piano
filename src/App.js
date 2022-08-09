import React from "react";
import ColorChanger from "./Components/ColorChanger"
import StartButton from "./Components/StartButton";
import { useState, useRef, useEffect } from "react";

export default function App() {
    //States
    const [color, setColor] = useState(84)
    const [message, setMessage] = useState("")
    

    //References
    const inputRef = useRef()

    useEffect(() => {
        setMessage(prevState => "START!")
    }, [])

    function changeColor() {
        const randomNumColour = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
        setColor(prevState => 84)
        setColor(prevState => prevState + randomNumColour)
        setMessage(prevState => "")
    }

    function focus() {
        inputRef.current.focus()
    } //Focus for the color changing mechanism

    const myStyle = {
        height: "800px",
        backgroundColor: `rgb(${color}, ${color}, 255)`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
    }


    return (
        <div>
            <div style={myStyle} className="background-img">
                <StartButton focus={focus} message={message} />
                <ColorChanger inputRef={inputRef} changeColor={changeColor}/>
            </div>
        </div>
    )
}