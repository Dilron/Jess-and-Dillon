import React, {Component} from 'react';

export default class Countdown extends Component {
    constructor(props){
        super(props)
        this.state = {
            weddingDateDays: new Date('Aug 1, 2020 00:00:00').getTime(),
            weddingDateTime: new Date('Aug 1, 2020 19:00:00').getTime(),
            nowDate: new Date().getTime(),
            days: 0,
            hours: 0,
        }
    };

    componentDidMount(){
        let daysDistance = this.state.weddingDateDays - this.state.nowDate;
        let timeDistance = this.state.weddingDateTime - this.state.nowDate;
        let daysCalc = Math.floor(daysDistance / (1000 * 60 * 60 * 24));
        let hoursCalc = Math.floor((timeDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutesCalc = Math.floor((timeDistance % (1000 * 60 * 60)) / (1000 * 60));        
        this.setState({
            weddingDate: this.state.weddingDate, 
            nowDate: this.state.nowDate,
            days: daysCalc,
            hours: hoursCalc,
            minutes: minutesCalc
        })
    }

    render(){
        return(
            <div className='countdown-container'>
                <h3>Wedding Countdown:</h3>
                <h3>{this.state.days}d, {this.state.hours}h and {this.state.minutes}m </h3>
            </div>
        )
    }
}