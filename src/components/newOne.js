import React, { Component } from 'react';
import { Col, Panel, Button, Glyphicon, FormControl, ControlLabel} from 'react-bootstrap'
import store from "../store";

class New extends Component {
  constructor() {
    super()
    this.state = {
      formShow: "hidden",
      iconShow: "",
      title: "",
      project: ""
    }
    store.subscribe(() => {
      this.setState({
        clocks: store.getState().clocks
      })
    })
  }
  newTimer = () => {
    var newClockID = Math.max(...this.state.clocks.map(clock => clock.id)) + 1
    var defaultTitle = this.state.title === "" ? `Timer ${newClockID}` : this.state.title
    var defaultProject = this.state.project === "" ? `Timer ${newClockID}` : this.state.project
    var clocks = this.state.clocks.concat({id: newClockID, name: defaultTitle, description: defaultProject, timer: 0, running: false, state: ""})
    this.setClock(clocks)
    this.setState({
      title: "",
      project: ""
    })
  }
  formShow = () => {    
    this.setState({
        formShow: "",
        iconShow: "hidden"
    })
  }
  formHide = () => {    
    this.setState({
        formShow: "hidden",
        iconShow: ""
    })
  }
  setClock(clocks) {    
    store.dispatch( {
        type: "setClock",
        clocks: clocks
    })
    this.formHide()
  }
  titleChange = (e) => {this.setState({ title: e.target.value});}
  projectChange = (e) => {this.setState({ project: e.target.value});}
  render() {
    return (
      <div>
        <div className={this.state.formShow}>
          <Col sm={4}>
            <Panel>
                <Panel.Heading>
                  <Panel.Title>
                    {this.state.title === "" ? "New Timer" : this.state.title}
                  </Panel.Title>
                </Panel.Heading>
                <Panel.Body>
                  <form>
                    <ControlLabel>Title</ControlLabel>
                      <FormControl type="text" value={this.state.title} placeholder="Enter text" onChange={this.titleChange} />
                      <ControlLabel>Project</ControlLabel>
                    <FormControl type="text" value={this.state.project} placeholder="Enter text" onChange={this.projectChange} />
                  </form>  
                </Panel.Body>
              <Panel.Footer onClick={this.newTimer} className="stopped"> Create </Panel.Footer>
            </Panel>
          </Col>
        </div>
        <Button bsSize="large" className={this.state.iconShow} onClick={this.formShow}> <Glyphicon glyph="glyphicon glyphicon-plus" /></Button>         
      </div>
        )
    }
}
export default New;
