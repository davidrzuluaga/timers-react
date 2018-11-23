import React, { Component } from 'react';
import { Button, Glyphicon } from 'react-bootstrap'
import store from "../store";

class Buttons extends Component {

constructor(props) {
    super(props)
    this.state = {
        clocks: [],
        title: "",
        project: ""
    }
    store.subscribe(() => {
      this.setState({
        clocks: store.getState().clocks,
        formShow: store.getState().formShow,
        iconShow: store.getState().iconShow
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
                <Button id={this.props.clock.id} bsSize="small" onClick={this.deleteTimer}> 
                    <Glyphicon glyph="glyphicon glyphicon-trash" />
                </Button>
                <Button id={this.props.clock.id} bsSize="small" onClick={this.check}> 
                    <Glyphicon glyph="glyphicon glyphicon-pencil" />
                </Button>
            </div>
          )
        }
    }
    
    export default (Buttons);
