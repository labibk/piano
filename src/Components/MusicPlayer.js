import React, { useContext } from "react";
import { audioContext, chordContext } from "../App";
import Array from "../Array";

export default function MusicPlayer() {

    const songList = Array
    const audio = useContext(audioContext)
    const chordIndex = useContext(chordContext)

    return (
        <div>
            <audio ref={audio} src={songList[chordIndex][0]}></audio>
        </div>
    )
}