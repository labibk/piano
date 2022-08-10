import React from "react";
import ColorChanger from "./Components/ColorChanger"
import StartButton from "./Components/StartButton";
import { useState, useRef, useEffect } from "react";
export const audioContext = React.createContext();

export default function App() {
    //States
    const [color, setColor] = useState(84)
    const [message, setMessage] = useState("")


    //References
    const inputRef = useRef()
    const audioRef = useRef()

    useEffect(() => {
        setMessage(prevState => "START!")
    }, [])

    function changeColor() {
        const randomNumColour = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
        setColor(prevState => 84)
        setColor(prevState => prevState + randomNumColour)
        setMessage(prevState => "")
        audioRef.current.play()
    }

    function stopMusic() {
        audioRef.current.pause()
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
                <audioContext.Provider value={audioRef}>
                    <ColorChanger inputRef={inputRef} changeColor={changeColor} stopMusic={stopMusic} />
                </audioContext.Provider>

            </div>
        </div>
    )
}