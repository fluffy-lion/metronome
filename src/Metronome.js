import { useState } from 'react'
import './metronome.css'

const Metronome = () => {
    const [bpm, setBpm] = useState(120)
    const [playing, setPlaying] = useState(false)
    const [count, setCount] = useState(0)
    const [beatsPerMeasure, setBeatsPerMeasure] = useState(4)

    return (
        <div className='metronome'>
            <h1>metro</h1>
            <div className='bpm-slider'>
                <div>{bpm}</div>
                <input type="range" min="60" max="240"></input>
            </div>
            <button>{playing ? 'stop' : 'start'}</button>
        </div>
    )
}

export default Metronome