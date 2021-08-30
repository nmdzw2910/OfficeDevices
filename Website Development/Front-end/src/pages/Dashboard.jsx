import React, { useEffect, useState } from 'react'

import { Link, useHistory } from 'react-router-dom'

import Chart from 'react-apexcharts'


import './page.css'

import StatusCard from '../components/status-card/StatusCard'

import NonStatusCard from '../components/status-card/NonStatusCard'

import Table from '../components/table/Table'

import Badge from '../components/badge/Badge'

import aqi from '../assets/images/aqi.png'

import noise from '../assets/images/noise.png'

import statusCards from '../assets/JsonData/status-card-data.json'

import nonStatusCards from '../assets/JsonData/non-status-card-data.json'

import { useSelector, useDispatch } from 'react-redux'


import '../components/layout/layout.css'

import Sidebar from '../components/sidebar/Sidebar'
import TopNav from '../components/topnav/TopNav'

import ThemeAction from '../redux/actions/ThemeAction'


const chartOptions = {
    series: [{
        name: 'Average AQI',
        data: [40, 70, 20, 90, 80, 20, 60]
    }, {
        name: 'Average Noise Level',
        data: [40, 30, 70, 20, 16, 91, 10]
    }],
    options: {
        color: ['#6ab04c', '#2980b9'],
        chart: {
            background: 'transparent'
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        legend: {
            position: 'top'
        },
        grid: {
            show: false
        }
    }
}

const Dashboard = (props) => {

    const history = useHistory();

    const themeReducer = useSelector(state => state.ThemeReducer)

    const dispatch = useDispatch()

    // const themeReducer = useSelector(state => state.ThemeReducer.mode)


    const [statusCard, setStatusCard] = useState();

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

        console.log("This function runs only on first Render")
        if (localStorage.getItem('museremail') === null || localStorage.getItem('museremail') === "" || localStorage.getItem('museremail') === "null") {
            history.push("/")
        }

        async function fetchStatusCard() {
            const endPoint = 'https://api.thingspeak.com/channels/1449821/feeds.json?results=1';
            const response = await fetch(endPoint);
            const responseJSON = await response.json();
            console.log({ responseJSON });

            const { feeds } = responseJSON;
            setStatusCard(feeds);
        }

        fetchStatusCard();

        const themeClass = localStorage.getItem('themeMode', 'theme-mode-light')

        const colorClass = localStorage.getItem('colorMode', 'theme-mode-light')

        dispatch(ThemeAction.setMode(themeClass))

        dispatch(ThemeAction.setColor(colorClass))
    }, [dispatch]);

    return (
        <div className={`layout ${themeReducer.mode} ${themeReducer.color}`}>

            <Sidebar {...props} />
            <div className="layout__content">

                <TopNav />
                <div className="layout__content-main">
                    <div>
                        <h2 className="page-header">Dashboard</h2>
                        <div className="row">
                            <div className="col-6">
                                <div className="row">
                                    {
                                        statusCards.map((item, index) => (
                                            <div className="col-6" key={index}>
                                                <Link to={item.route} key={index}>
                                                    <StatusCard
                                                        values={statusCard}
                                                        area={item.area}
                                                        icon={item.icon}
                                                    />
                                                </Link>
                                            </div>
                                        ))
                                    }
                                    {
                                        nonStatusCards.map((item, index) => (
                                            <div className="col-6" key={index}>
                                                <Link to={item.route} key={index}>
                                                    <NonStatusCard
                                                        values={statusCard}
                                                        area={item.area} />
                                                </Link>
                                            </div>
                                        ))
                                    }

                                </div>
                            </div>
                            <div className="col-6">
                                <div className="card full-height">
                                    {/* chart */}
                                    <Chart
                                        options={themeReducer === 'theme-mode-dark' ? {
                                            ...chartOptions.options,
                                            theme: { mode: 'dark' }
                                        } : {
                                            ...chartOptions.options,
                                            theme: { mode: 'light' }
                                        }}
                                        series={chartOptions.series}
                                        type='line'
                                        height='100%'
                                    />
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3>US EPA Air Quality Index</h3>
                            <img className='reponsive-img' src={aqi} alt="aqi" />
                            <h3>Noise Level - Decibel Scale</h3>
                            <img className='reponsive-img' src={noise} alt="noise" />
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Dashboard
