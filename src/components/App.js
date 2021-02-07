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

    gettimeString(){
        const[hours,minutes,seconds]=[this.state.time.getHours(),this.state.time.getMinutes(),this.state.time.getSeconds()];
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
      return ( num<10 ? ("0"+num) : (""+num));
      

    }
    render() {

        return(
            <div className="Clock">
                <h3 id="time">{this.gettimeString()}</h3>
               
            </div>
        )
    }
}


export default App;
