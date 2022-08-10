import React, { useContext } from "react";
import { audioContext } from "../App";
import Array from "../Array";

export default function MusicPlayer() {

    const songList = Array
    const audio = useContext(audioContext)

    return (
        <div>
            <audio ref={audio} src={songList.first[0]}></audio>
        </div>
    )
}