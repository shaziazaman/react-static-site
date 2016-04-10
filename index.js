import React from 'react'
import ReactDOM from 'react-dom'
import {Router, hashHistory} from 'react-router'
import Routes from './Routes'

if (typeof document !== 'undefined') {
    module.exports =
    ReactDOM.render(
        <Router history={hashHistory} routes={Routes}/>)
        , document.getElementById('app');

}
else {
    module.exports = function render(locals, callback) {
        callback(null, '<html>...</html>');
    }
};


