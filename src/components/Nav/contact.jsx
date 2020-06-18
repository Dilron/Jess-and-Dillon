import React, { Component } from 'react';

export default class Contact extends Component {
    render() {
        return (
            <div className="contact-container" >
                <h1>Contact Us</h1>
                    <div className='contact-info-row' >
                    <h2>Dillon</h2>
                        <h2>Phone: 541-728-4059</h2>
                        <h2>Email: dillonokelle@gmail.com</h2>
                    </div>
                    <div className='contact-info-row'>
                    <h2>Jess</h2>
                        <h2>Phone: 801-663-9496</h2>
                        <h2>Email: jess.esplin@gmail.com</h2>
                    </div>
            </div>
        )
    }
}