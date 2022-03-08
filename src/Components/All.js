import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import '../css/all.css'
import Feed from './Feed'
import Nav from './Nav'
import Sidebar from './Sidebar'
import FE from './FE';
import CS from './CS';
import IT from './IT';
import ETC from './ETC';
import TP from './TP';
import Clubs from './Clubs';
import HM from './HM';

import Feedback from './Feedback'
function All() {
    return (
        <Router>
        <div className="allcomp">
            <Nav/>
             
            <div className="content">
            <Sidebar/>
            <Switch>
                <Route exact path="/">
                    <Feed/>
                </Route>
                <Route exact path="/fe">
                    <FE/>
                </Route>
                <Route exact path="/cs">
                    <CS/>
                </Route>
                <Route exact path="/it">
                    <IT/>
                </Route>
                <Route exact path="/etc">
                    <ETC/>
                </Route>
                <Route exact path="/tp">
                    <TP/>
                </Route>
                <Route exact path="/clubs">
                    <Clubs/>
                </Route>
                <Route exact path="/hm">
                    <HM/>
                </Route>
                <Route exact path="/fb">
                    <Feedback/>
                </Route>
            </Switch>
           
            </div>
        </div>
        </Router>
    )
}

export default All
