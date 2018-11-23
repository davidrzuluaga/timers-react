import React, { Component } from 'react';
import { Panel, Glyphicon, FormControl, ControlLabel} from 'react-bootstrap'
import store from "../store";

class Buttons extends Component {

constructor(props) {
    super(props)
    this.state = {
        title: "",
        project: ""
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
  editingTimer = (e) => {
    const index = this.state.clocks.findIndex(clock => clock.id === Math.floor(e.target.id));
    const clocks = this.state.clocks.map((clock, i) => (index === i ? {id: clock.id, name: clock.name, description: clock.description, timer: clock.timer, running: clock.running, state: "editing"} : clock ))
    const title = this.state.clocks[index].name
    const project = this.state.clocks[index].description
     this.setState({ 
         title: title,
         project: project
     })
    this.setClock(clocks)
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
  modifyTimer = (e) => {
    const index = this.state.clocks.findIndex(clock => clock.id === Math.floor(e.target.id));
    var defaultTitle = this.state.title === "" ? `Timer ${e.target.id}` : this.state.title
    var defaultProject = this.state.project === "" ? `Timer ${e.target.id}` : this.state.project
    var clocks = this.state.clocks.map((clock, i) => index === i ? {id: clock.id, name: defaultTitle, description: defaultProject, timer: clock.timer, running: clock.running, state: ""} : clock ) 
    this.setClock(clocks)
    this.setState({
      title: "",
      project: ""
    })
  }
  titleChange = (e) => {this.setState({ title: e.target.value});}
  projectChange = (e) => {this.setState({ project: e.target.value});}
    render() {
      return (
          <div>
            <Panel.Heading className={this.props.clock.state === "editing" ? "" : "hidden"}><Panel.Title>{this.state.title === "" ? "Timer" : this.state.title}</Panel.Title></Panel.Heading>
            <div className={this.props.clock.state === "editing" ? "" : "hidden"}>
                <Panel.Body>
                  <form>
                    <ControlLabel>Title</ControlLabel>
                      <FormControl type="text" value={this.state.title} placeholder="Enter text" onChange={this.titleChange} />
                      <ControlLabel>Project</ControlLabel>
                    <FormControl type="text" value={this.state.project} placeholder="Enter text" onChange={this.projectChange} />
                  </form>  
                </Panel.Body>
                <Panel.Footer id={this.props.clock.id} onClick={this.modifyTimer} className="stopped"> Modify </Panel.Footer>
            </div>    
            <div className={this.props.clock.state === "editing" ? "hidden" : "clockoptions"}>
                <Glyphicon id={this.props.clock.id} className="clickableGly" onClick={this.deleteTimer} glyph="glyphicon glyphicon-trash" />
                <Glyphicon id={this.props.clock.id} className="clickableGly" onClick={this.editingTimer} glyph="glyphicon glyphicon-pencil" />
            </div>
        </div>
      )
    }
}
    
    export default (Buttons);
