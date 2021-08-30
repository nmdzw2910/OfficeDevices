import React from 'react'
import PropTypes from 'prop-types';
import './statuscard.css'


StatusCard.propTypes = {
    values: PropTypes.array,
};

StatusCard.defaultProps = {
    values: [],
}


function StatusCard(props) {
    const { values } = props;

    return (
        <div>
            {values.map(value => (
                <div className='status-card '>
                    <div className="status-card__info">
                        
                        <h4><i className={props.icon}></i> {props.area}</h4>
                        <h5>Air Quality: {value.field3} AQI <span className="dot"></span></h5>
                        <br />
                        <h5>Noise Level: {value.field4} dB <span className="dot"></span></h5>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default StatusCard
