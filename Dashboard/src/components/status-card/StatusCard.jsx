import React from 'react'

import './statuscard.css'

const StatusCard = props => {
    const active = props.active ? 'active' : ''

    return (
        <div className='status-card '>
            <div className="status-card__icon" >
                <i className={props.icon}></i>
            </div>
            <div className="status-card__info">
                <h4>{props.area}</h4>
                <span>{props.aqi}</span>
                <br></br>
                <span>{props.noise}</span>
            </div>
        </div>
    )
}

export default StatusCard
