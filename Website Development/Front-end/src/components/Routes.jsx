import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Login from '../pages/login'

import Area1 from '../pages/Area1'
import Configuration from '../pages/Configuration'
import ForgotPassword from '../pages/ForgotPassword'

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Login} />
            <Route path='/dashboard' exact component={Dashboard} />
            <Route path='/Configuration' component={Configuration} />
            <Route path='/Area1' component={Area1} />
            <Route path='/forgotpassword' component={ForgotPassword} />

        </Switch>
    )
}

export default Routes
