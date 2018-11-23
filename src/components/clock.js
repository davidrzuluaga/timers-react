import React, { Component } from 'react';
import sampleClocks from "./sampleClocks";
import { Button, Glyphicon} from 'react-bootstrap'
import store from "../store";

class Clock extends Component {

    constructor(props) {
      super(props)
      this.state = {
        clocks: sampleClocks
      }
      store.subscribe(() => {
        this.setState({
          clocks: store.getState().clocks
        })
      })
      this.clock()
    }
    clock = () => {
      var clocks = this.state.clocks.map((clock, index) => clock.running ? {id: clock.id, name: clock.name, description: clock.description, timer: clock.timer + 1000, running: clock.running, state: clock.state} : clock ) 
      this.setClock(clocks)
      setTimeout(this.clock, 1000)
    }
    setClock(clocks) {    
      store.dispatch( {
          type: "setClock",
          clocks: clocks
      })
    }
    stopClocks = () => {
      var clocks = this.state.clocks.map((clock, index) => clock.running ? {id: clock.id, name: clock.name, description: clock.description, timer: clock.timer, running: false} : clock ) 
      this.setClock(clocks)
    }
    render() {
      return (
        <Button onClick={this.stopClocks}> <Glyphicon glyph="glyphicon glyphicon-pause" /></Button>           
      )
    }
}
export default Clock;