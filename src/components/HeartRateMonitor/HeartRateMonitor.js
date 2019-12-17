import React, {useState} from 'react'
import './HearRateMonitor.css'
import useInterval from '../Utils/UseInterval'
import BackgroundBlobs from "../BackgroundBlobs/BackgroundBlobs";

const HeartRateMonitor = ({bpmRef}) => {

    const [bpm, setBpm] = useState(parseInt(bpmRef.current))

    useInterval(() => {
        const bpmNumber = bpmRef.current
        setBpm(bpmNumber)
    }, 500)

    return(
        <div className="measure-active">
            <div className="measure-circle-bpm">
                <span className={"bpm-highlight bpm-value"}>{parseInt(bpm)}</span>
                <span>bpm</span>
            </div>
            <div className="measure-circle-subtitle">
                Hz: {parseFloat(bpm/60).toFixed(2)}
            </div>
        </div>
    )
}

export default HeartRateMonitor
