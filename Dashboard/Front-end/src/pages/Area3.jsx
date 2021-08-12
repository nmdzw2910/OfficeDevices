import React from 'react'
import './page.css'

const Area3 = () => {
    return (
        <div>
            <iframe className="chart" src="https://thingspeak.com/channels/1449821/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=Temperature&type=line"></iframe>
            <iframe className="chart" src="https://thingspeak.com/channels/1449821/charts/2?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=Humidity&type=line"></iframe>
            <iframe className="chart" src="https://thingspeak.com/channels/1449821/charts/3?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=Air+Quality+Index&type=line"></iframe>
            <iframe className="chart" src="https://thingspeak.com/channels/1449821/charts/4?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=Noise+Level&type=line"></iframe>
        </div>
    )
}

export default Area3
