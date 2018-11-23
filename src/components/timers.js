import React, { Component } from 'react';
import sampleClocks from "./sampleClocks";
import store from "../store";
import { Col, Panel} from 'react-bootstrap'
import Buttons from './buttons';

class Timers extends Component {

  constructor() {
    super()
    this.state = {
      clocks: sampleClocks
    }
    store.subscribe(() => {
      this.setState({
        clocks: store.getState().clocks,
        formShow: store.getState().formShow,
        iconShow: store.getState().iconShow
      })
    })
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


  pauseTimer = (e) => {
    const index = this.state.clocks.findIndex(clock => clock.id === Math.floor(e.target.id));
    var clocks = this.state.clocks.map((clock, i) => index === i ? {id: clock.id, name: clock.name, description: clock.description, timer: clock.timer, running: !clock.running} : clock ) 
    this.setClock(clocks)
  }
  setClock(clocks) {    
    store.dispatch( {
        type: "setClock",
        clocks: clocks
    })
  }
  check = (e) => {
    console.log(e.target.id)
  }
  
  render() {
    return (
      <div>
        {this.state.clocks.map((clock, index) =>  
        <Col  key={clock.id} sm={4}>
          <Panel>
              <Panel.Heading><Panel.Title>{clock.name}</Panel.Title></Panel.Heading>
              <Panel.Body><p className="clockdescription">{clock.description}</p></Panel.Body>
                  <p className="clockrunning">{this.millisecondsToHuman(clock.timer)}</p>       
                  <Buttons clock = {clock} />
              <Panel.Footer id={clock.id} className={clock.running ? "running" : "stopped" } onClick={this.pauseTimer}>{clock.running ? "Stop" : "Start" }</Panel.Footer>
          </Panel>
        </Col>
        )}
      </div>
    )
  }
}
export default Timers;
