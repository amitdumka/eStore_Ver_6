// Clock.js 
//        Display Today Clock
import React from "react";

const MonthName=["Jan","Feb","Mar","Apr","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      date: new Date(),
    });
  }
  render() {
    return (
      <div className="success">
       <span style={{color: 'red', fontWeight: 'bold'}} className="text-primary font-weight-bold">   {MonthName[ this.state.date.getMonth()+1]},  </span>
       <span style={{color: 'green', fontWeight: 'bold'}} className="text-success font-weight-bold ml-2">    {this.state.date.getDay()} {" "} {this.state.date.toLocaleTimeString()}</span>
       
      </div>
    );
  }
}

export function FormattedDate(props) {
  return <div className={props.className}>{props.date.toLocaleTimeString()}</div>;
}