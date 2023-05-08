import { useState } from 'react'
import './metronome.css'
import click1 from './sounds/click1.wav'
import click2 from './sounds/click2.wav'
const Metronome = () => {
    const [bpm, setBpm] = useState(120)
    const [playing, setPlaying] = useState(false)
    const [count, setCount] = useState(0)
    const [beatsPerMeasure, setBeatsPerMeasure] = useState(4)

    let clickOne = new Audio(click1)
    let clickTwo = new Audio(click2)
    
    const handleBpmChange = (e) => {
        setBpm(e.target.value)
    }

    return (
        <div className='metronome'>
            <h1>metro</h1>
            <div className='bpm-slider'>
                <div>{bpm}</div>
                <input 
                    type="range"
                    min="60"
                    max="240"
                    value={bpm}
                    onChange={handleBpmChange}
                />
            </div>
            <button>{playing ? 'stop' : 'start'}</button>
        </div>
    )
}

export default Metronome