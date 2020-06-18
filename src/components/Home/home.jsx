import React, { Component } from 'react';

export default class Home extends Component {
    render() {
        return (
            <div className='home-container' >
                <div className='home-splash mb-seperator' >
                    <section className='home-splash-box' >
                        <h1>We're Getting Married!</h1>
                        <h2>August 1, 2020</h2>
                        <div>
                            <h2>Soldier Hallow</h2>
                            <h2>Midway, UT</h2>
                        </div>
                        <h3>We are so excited to celebrate our wedding day with you on August 1st!</h3>
                        <button>RSVP</button>
                    </section>
                </div>
                <div className='home-info mb-seperator' >
                    <img className='info-banner' src='https://i.imgur.com/38ppLZd.jpg' />
                    <section className='info-content' ></section>
                </div>
                <img className='content-splash mb-seperator' src='https://i.imgur.com/JQg89Vx.jpg' />
                <img className='content-splash mb-seperator' src='https://i.imgur.com/O0xyQsE.jpg' />
            </div>
        )
    }
}