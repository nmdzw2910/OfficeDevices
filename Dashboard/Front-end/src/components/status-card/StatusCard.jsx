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
                <h5>{props.aqi} ppm <span className="dot"></span></h5>
                <br />
                <h5>{props.noise} dB <span className="dot"></span></h5>
            </div>
        </div>
    )
}

export default StatusCard
