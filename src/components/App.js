import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state={
            time : new Date(),
           
        }
        this.intervalId = null;
    }

    getString(){
        const[hours,minutes,seconds]=[time.getHours(),time.getMinutes(),time.getSeconds()];
        const amorpm = hours>=12 ? "PM" :"AM";
        const twelvehour = hours >12 ? hours-12 :hours;
        const hourstring = this.paddednum(twelvehour);
        const minutestring = this.paddednum(minutes);
        const secondstring = this.paddednum(seconds);
        const fstring = `${hourstring}:${minutestring}:${secondstring} ${amorpm}`
        return fstring;


    }
    componentDidMount(){
        this.intervalId = setInterval(()=>{
            this.setState({
                time:new Date()
            }
        )},1*1000);
    }
    componentWillUnmount(){
        clearInterval(this.intervalId);
    }
    paddednum(num){
        const padded =( num<10?("0"+num) : (""+num));
        return padded;

    }
    render() {

        return(
            <div className="Clock">
                <h3 id="time">{this.getString()}</h3>
               
            </div>
        )
    }
}


export default App;
