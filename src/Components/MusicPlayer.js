import React, { useContext } from "react";
import { audioContext } from "../App";
import song from "../Music/song_1.mp3"

export default function MusicPlayer() {

    const audio = useContext(audioContext)

    return (
        <div>
            <audio ref={audio} src={song}></audio>
        </div>
    )
}