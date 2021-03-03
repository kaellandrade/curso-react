import React from 'react'
import Dashboard from '../dashboard2/dashboar2'
import BilllingCycle from '../billingCycle/billingCycle'
import { Redirect, Route, Router, hashHistory } from 'react-router'

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={Dashboard} />
        <Route path='/billingCycles' component={BilllingCycle} />
        <Redirect from='*' to='/' />
    </Router>
)