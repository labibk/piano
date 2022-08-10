import React from "react";
import ColorChanger from "./Components/ColorChanger"
import StartButton from "./Components/StartButton";
import ChordButton from "./Components/ChordButton";
import { useState, useRef, useEffect } from "react";
export const audioContext = React.createContext();
export const chordContext = React.createContext();

export default function App() {
    //States
    const [color, setColor] = useState(84)
    const [message, setMessage] = useState("")
    const [chord, setChord] = useState("first")


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

    function changeChord() {
        if (chord === "first") {
            setChord(prevState => "second")
            setMessage(prevState => "Start Again")
        } else if (chord === "second") {
            setChord(prevState => "third")
            setMessage(prevState => "Start Again")
        } else {
            setChord(prevState => "first")
            setMessage(prevState => "Start Again")
        }
    }

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

                <chordContext.Provider value={chord}>
                    <audioContext.Provider value={audioRef}>
                        <ColorChanger inputRef={inputRef} changeColor={changeColor} stopMusic={stopMusic} />
                    </audioContext.Provider>
                </chordContext.Provider>


                <div>
                    <ChordButton changeChord={changeChord} chord={chord} />
                </div>

            </div>
        </div>
    )
}