import { useState, useEffect, useRef } from 'react'
import './metronome.css'
import click1 from './sounds/click1.wav'
import click2 from './sounds/click2.wav'
const Metronome = () => {
    const [bpm, setBpm] = useState(120)
    const [playing, setPlaying] = useState(false)
    const [count, setCount] = useState(0)
    const [beatsPerMeasure, setBeatsPerMeasure] = useState(4)
    const timer = useRef()
    let clickOne = new Audio(click1)
    let clickTwo = new Audio(click2)

    const playClick = () => {
        if(count % beatsPerMeasure === 0){
            clickTwo.play()
        }else {
            clickOne.play()
        }
        setCount((count + 1) % beatsPerMeasure)
    }
    useEffect(() => {
        if(playing){
            clearInterval(timer.current)
            timer.current = setInterval(playClick, (60/bpm) * 1000)
        } else {
            clearInterval(timer.current)
        }
    },[bpm, playing, playClick])
    
    const startStop = () => {
        if(playing) {
            setPlaying(false)
        } else {
            setCount(0)
            setPlaying(true)
        }
    }

    const handleBpmChange = (e) => {
        setBpm(e.target.value)
        if(playing){
            setCount(0)
        }
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
            <button onClick={startStop}>{playing ? 'stop' : 'start'}</button>
        </div>
    )
}

export default Metronome