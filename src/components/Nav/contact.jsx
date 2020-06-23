import React, { Component } from 'react';

export default class Contact extends Component {
    render() {
        return (
            <div className="contact-container" >
                <h1>Contact Us</h1>
                <a href="mailto:jessanddillon2020@gmail.com" target="_blank" rel="noopener noreferrer" >jessanddillon2020@gmail.com</a>
                <div className='contact-info-row' >
                    <h2>Dillon</h2>
                    <h2>Phone: 541-728-4059</h2>
                    <h2>Email: <a href="mailto:dillonokelle@gmail.com" target="_blank" rel="noopener noreferrer" >dillonokelle@gmail.com</a> </h2>
                </div>
                <div className='contact-info-row'>
                    <h2>Jess</h2>
                    <h2>Phone: 801-663-9496</h2>
                    <h2>Email: <a href="mailto:jess.esplin@gmail.com" target="_blank" rel="noopener noreferrer" >jess.esplin@gmail.com</a> </h2>
                </div>
            </div>
        )
    }
}