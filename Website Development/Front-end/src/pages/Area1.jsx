import React from 'react'
import './page.css'
import SensorValue from './Area';
import { useState, useEffect } from 'react';



const Area1 = () => {

    const [sensorValue, setSensorValue] = useState();

    useEffect(() => {
        //     setInterval(() => {
        //         async function fetchSensorValue() {
        //             const endPoint = 'https://api.thingspeak.com/channels/1449821/feeds.json?results=1';
        //             const response = await fetch(endPoint);
        //             const responseJSON = await response.json();
        //             console.log({ responseJSON });
        //             const { feeds } = responseJSON;
        //             setSensorValue(feeds);

        //         }

        //         fetchSensorValue();
        //     }, 30000)
        // }, []);
        async function fetchSensorValue() {
            const endPoint = 'https://api.thingspeak.com/channels/1449821/feeds.json?results=1';
            const response = await fetch(endPoint);
            const responseJSON = await response.json();
            console.log({ responseJSON });

            const { feeds } = responseJSON;
            setSensorValue(feeds);

        }

        fetchSensorValue();
    }, []);


    return (
        <div style={{paddingTop:"50px"}}>
            <SensorValue values={sensorValue} />

            <div style={{ textAlign: 'center' }}>
                <h2 className="page-header">Chart</h2>
                <div className="row">
                    <div className="col-6">
                        <iframe className="chart" src="https://thingspeak.com/channels/1449821/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=Temperature&type=line"></iframe>
                    </div>
                    <div className="col-6">
                        <iframe className="chart" src="https://thingspeak.com/channels/1449821/charts/2?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=Humidity&type=line"></iframe>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <iframe className="chart" src="https://thingspeak.com/channels/1449821/charts/3?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=Air+Quality+Index&type=line"></iframe>
                    </div>
                    <div className="col-6">
                        <iframe className="chart" src="https://thingspeak.com/channels/1449821/charts/4?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=Noise+Level&type=line"></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Area1
