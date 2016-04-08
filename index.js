import React from 'react'
import { render } from 'react-dom'
import {Router, Route, hashHistory} from 'react-router'
import Repo from './modules/Repo'
import About from './modules/About'

render(( 
    <Router history={hashHistory}>
        <Route path="Index" component={Repo} />
        <Route path="about" component={About} />
    </Router> )
    , document.getElementById('app'));
