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
                <div className='nav-container-right' >
                    {/* <h1>RSVP</h1>
                    <h1>Our Story</h1>
                    <h1>The Wedding</h1>
                    <h1>The Schedule</h1>
                    <h1>Send Us A Gift</h1> */}
                </div>
            </div>
        )
    }
}