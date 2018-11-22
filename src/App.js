import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor() {
    super()
    /*const hour = new Date().getHours() * 3.6e+6
    const minutes = new Date().getMinutes() * 60000
    const seconds = new Date().getSeconds() * 1000*/
    this.state = {
      allRunning: false,
      clocks: [
        {id: 1, name: 'AMZ1', timer: 0, running: false},
        {id: 2, name: 'AMZ2', timer: 0, running: false},
      ]
    }
    this.clock()
  }
  millisecondsToHuman(ms) {
    const seconds = Math.floor((ms / 1000) % 60);
    const minutes = Math.floor((ms / 1000 / 60) % 60);
    const hours = Math.floor(ms / 1000 / 60 / 60);
  
    const humanized = [
      this.pad(hours.toString(), 2),
      this.pad(minutes.toString(), 2),
      this.pad(seconds.toString(), 2),
    ].join(':');
  
    return humanized;
  }
  
  pad(numberString, size) {
    let padded = numberString;
    while (padded.length < size) padded = `0${padded}`;
    return padded;
  }
  clock = () => {
    var clocks = this.state.clocks.map((clock, index) => clock.running ? {id: clock.id, name: clock.name, timer: clock.timer + 1000, running: clock.running} : clock ) 
    this.setState({
      clocks: clocks
    })
      setTimeout(this.clock, 1000)
  }
  newTimer = () => {
    var taskId = this.state.clocks.length + 1
    this.setState({
      clocks: this.state.clocks.concat({id: taskId, name: `AMZ${taskId}`, timer: 0, running: false})
    })
  }
  pauseTimer = (e) => {
    const index = this.state.clocks.findIndex(clock => clock.id === Math.floor(e.target.id));
    var clocks = this.state.clocks.map((clock, i) => index === i ? {id: clock.id, name: clock.name, timer: clock.timer, running: !clock.running} : clock ) 
    this.setState({
      clocks: clocks
    })
  }
  render() {
    return (
      <div>
        <h1 onClick={this.newTimer}>New</h1>
        {this.state.clocks.map((clock, index) =>  
          <h1 onClick={this.pauseTimer} id={clock.id} key={clock.id}>{clock.name}: {this.millisecondsToHuman(clock.timer)}</h1>
        )}
      </div>
    );
  }
}

export default App;
