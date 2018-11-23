import React, { Component } from 'react';
import { Glyphicon } from 'react-bootstrap'
import store from "../store";

class Buttons extends Component {

constructor(props) {
    super(props)
    this.state = {
        title: "",
        project: "",
        editor: "hidden"
    }
    store.subscribe(() => {
      this.setState({
        clocks: store.getState().clocks
      })
    })
  }
  setClock(clocks) {
    store.dispatch( {
        type: "setClock",
        clocks: clocks
    })
  }
  deleteTimer = (e) => {
    const index = this.state.clocks.findIndex(clock =>
        clock.id === Math.floor(e.target.id)
        ); 
    const clocks = this.state.clocks.filter((clock, i) =>
        index !== i
    )
    this.setClock(clocks)
  }
    check = (e) => {
        console.log(Math.floor(e.target.id))
      }
    render() {
      return (
            <div className="clockoptions">
                <Glyphicon id={this.props.clock.id} className="clickableGly" onClick={this.deleteTimer} glyph="glyphicon glyphicon-trash" />
                <Glyphicon id={this.props.clock.id} className="clickableGly" onClick={this.check} glyph="glyphicon glyphicon-pencil" />
            </div>
            )
        }
    }
    
    export default (Buttons);
