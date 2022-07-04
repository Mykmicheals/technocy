import React, { useState } from 'react'
import classes from './Time.module.css'

function Time() {
    const [hours, setHours] = useState()
    const [min, setmin] = useState()
    const [sec, setSec] = useState()
    setInterval(updateTime, 1000)

    function updateTime() {
        // const latestTime = new Date().toLocaleTimeString();
        const hours = new Date().getHours()
        const min = new Date().getMinutes()
        const sec = new Date().getSeconds()
        // setTime(latestTime)
        setHours(hours)
        setmin(min)
        setSec(sec)
    }
    const dSec = 60 - +sec
    const dMin = 60 - +min
    const dhr = 23 - +hours

    return (
        <div className={classes.time}>
            <p>{dhr} <small>hrs</small> </p>
            <p>{dMin}<small>min</small></p>
            <p>{dSec}<small>sec</small></p>
            {/* 
            <h3>{dhr}: {dMin}: {dSec}</h3> */}
        </div>
    )
}

export default Time
