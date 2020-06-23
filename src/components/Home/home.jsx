import React, { Component } from 'react';

export default class Home extends Component {
    render() {
        return (
            <div className='home-container' >
                <div className='home-splash mb-seperator' >
                    <section className='home-splash-box' >
                        <h1>We're Getting Married!</h1>
                        <h2>August 7, 2021</h2>
                        <h2>Soldier Hallow | Midway, UT</h2>
                        <h3>We are so excited to celebrate our marriage with you on August 7th next year! Although we will still be married on August 1st, 2020, we are rescheduling our wedding events to 2021 due to COVID. Please visit this website in the coming months to RSVP & stay in loop on our wedding celebrations!
                            For those invited to our ceremony this year, please find the RSVP link below!
                        </h3>
                        {/* <button>RSVP</button> */}
                    </section>
                </div>
                <div className='home-info mb-seperator' >
                    <img className='info-banner' src='https://i.imgur.com/38ppLZd.jpg' />
                    <section className='info-content' >
                        <h1>*WEBSITE UNDER CONSTRUCTION, MORE INFO COMING SOON.*</h1>
                        <h2>For those invited to our ceremony this year, RSVP <a href="https://forms.gle/xPvhjDz4QSqdnjGx6" target="_blank" rel="noopener noreferrer">here</a> for August 1, 2020</h2>
                        <ul>
                            <li>Due to COVID, we are rescheduling our wedding events to 2021.</li>
                            <li>Watch for your Change the Date in the mail & let us know if don't receive one.</li>
                        </ul>
                    </section>
                </div>
                <img className='content-location mb-seperator' src='https://i.imgur.com/eH1uAyT.jpg' />
                <img className='content-splash mb-seperator' src='https://i.imgur.com/O0xyQsE.jpg' />
            </div>
        )
    }
}