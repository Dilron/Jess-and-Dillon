import React, { Component } from 'react';
import Countdown from './countdown';

export default class Nav extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className='nav-container'>
                <div className='nav-title'>
                    <h1>Jess <i>&</i> Dillon</h1>
                </div>
                <Countdown />
            </div>
        )
    }
}