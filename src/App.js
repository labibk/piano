import React from "react";
import ColorChanger from "./Components/ColorChanger"
import StartButton from "./Components/StartButton";
import ChordButton from "./Components/ChordButton";
import Cards from "./Components/Cards";
import { useState, useRef, useEffect } from "react";
export const audioContext = React.createContext();
export const chordContext = React.createContext();
export const indexContext = React.createContext();

export default function App() {
    //States
    const [color, setColor] = useState(84)
    const [message, setMessage] = useState("")
    const [chord, setChord] = useState("A Minor - D minor - E Minor")
    const [index, setIndex] = useState(0)
    const [errorMsg, setErrorMsg] = useState()
    console.log(`The current index is ${index}`)




    //References
    const inputRef = useRef()
    const audioRef = useRef()

    useEffect(() => {
        setMessage(prevState => "Click anywhere in screen or this button to start")
    }, [])

    function changeColor() {
        audioRef.current.load()
        var playPromise = audioRef.current.play();

        if (playPromise !== undefined) {
            setErrorMsg("")
            playPromise.then(_ => {
            })
                .catch(error => {
                    setErrorMsg("Yikes! Please play one key at a time.")
                });
        }
        const randomNumColour = Math.floor(Math.random() * (184 - 84 + 1)) + 84;
        setColor(randomNumColour)
        setMessage(prevState => "Enjoy!")



    }




    function stopMusic() {
        audioRef.current.load()
        const randomNumIndex = Math.floor(Math.random() * (9 - 0 + 1)) + 0;
        setIndex(randomNumIndex)
    }

    function focus() {
        inputRef.current.focus()
        setMessage("Enjoy!")
    } //Focus for the color changing mechanism

    function changeChord() {
        if (chord === "A Minor - D minor - E Minor") {
            setChord(prevState => "A Minor - B Diminished - C Major")
            setMessage(prevState => "START!")
        } else if (chord === "A Minor - B Diminished - C Major") {
            setChord(prevState => "C Major - F Major - G Major")
            setMessage(prevState => "START!")
        } else {
            setChord(prevState => "A Minor - D minor - E Minor")
            setMessage(prevState => "START!")
        }
    }

    const myStyle = {
        position: "absolute",
        top: "0px",
        right: "0px",
        bottom: "0px",
        left: "0px",
        // backgroundColor: `rgb(${color}, ${color}, 255)`,
        backgroundImage: `linear-gradient(rgb(${color}, ${color}, 255), red)`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
    }


    return (
        <div onClick={focus}>
            <div style={myStyle} className="background-img">
                <div className="nav">
                    <div className="nav-heading-1">
                        <h1 >onlinePiano</h1>
                    </div>

                </div>

                <StartButton focus={focus} message={message} />

                <indexContext.Provider value={index}>
                    <chordContext.Provider value={chord}>
                        <audioContext.Provider value={audioRef}>
                            <ColorChanger inputRef={inputRef} changeColor={changeColor} stopMusic={stopMusic} />
                        </audioContext.Provider>
                    </chordContext.Provider>
                </indexContext.Provider>
                <div className="cards">
                    <Cards chord={chord} />
                </div>


                <ChordButton className="chord-button-component" changeChord={changeChord} chord={chord} errorMsg={errorMsg} />


            </div>
        </div>
    )
}