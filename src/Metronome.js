import './metronome.css'

const Metronome = () => {
    let bpm = 120
    let playing = false

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