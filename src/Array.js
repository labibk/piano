import A from "./Music/A.mp3"
import A2 from "./Music/A2.mp3"
import B from "./Music/B.mp3"
import B2 from "./Music/B2.mp3"
import C from "./Music/C.mp3"
import C2 from "./Music/C2.mp3"
import D from "./Music/D.mp3"
import D2 from "./Music/D2.mp3"
import E from "./Music/E.mp3"
import E2 from "./Music/E2.mp3"
import F from "./Music/F.mp3"
import F2 from "./Music/F2.mp3"
import G from "./Music/G.mp3"
import G2 from "./Music/G2.mp3"





// the music player accesses random files from this array
const Array = {

    "A Minor - D minor - E Minor": [A, A2, B, C, D, D2, E, E2, F, G, "This is a I-IV-V-I Chord progression, sad mood"],
    "A Minor - B Diminished - C Major": [A, A2, B, C, D, E, F, G, C2, B2, "This is a I-II-III chord progression, desolate mood"],
    "C Major - F Major - G Major": [A, B, C, D, E, F, G, C2, F2, G2, "This is a I-IV-V (Mjaor key) chord progression, uplifting mood"]
}

export default Array