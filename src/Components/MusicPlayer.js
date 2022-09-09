import React, { useContext } from "react";
import { audioContext, chordContext, indexContext } from "../App";
import Array from "../Array";

export default function MusicPlayer() {

    const songList = Array
    const audio = useContext(audioContext)
    const chordIndex = useContext(chordContext)
    const noteIndex = useContext(indexContext)

    return (
        <div>
            <audio data-testid="music-player-element" ref={audio} src={songList[chordIndex][noteIndex]} ></audio>
            
            
        </div>
    )
}