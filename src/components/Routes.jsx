import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'

import Area1 from '../pages/Area1'
import Area2 from '../pages/Area2'
import Area3 from '../pages/Area3'
import Area4 from '../pages/Area4'
import Configuration from '../pages/Configuration'

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Dashboard}/>
            <Route path='/Configuration' component={Configuration}/>
            <Route path='/Area1' component={Area1}/>
            <Route path='/Area2' component={Area2}/>
            <Route path='/Area3' component={Area3}/>
            <Route path='/Area4' component={Area4}/>
        </Switch>
    )
}

export default Routes
