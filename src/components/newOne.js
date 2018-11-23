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
        clocks: store.getState().clocks,
        formShow: store.getState().formShow,
        iconShow: store.getState().iconShow
      })
    })
  }
  newTimer = () => {
    var taskId = this.state.clocks.length + 1
    var defaultTitle = this.state.title === "" ? `Timer ${taskId}` : this.state.title
    var defaultProject = this.state.project === "" ? `Timer ${taskId}` : this.state.project
    var clocks = this.state.clocks.concat({id: taskId, name: defaultTitle, description: defaultProject, timer: 0, running: false})
    this.setClock(clocks)
    this.setState({
      title: "",
      project: ""
    })
  }
  formShow() {    
    store.dispatch( {
        type: "formShow",
        formShow: "",
        iconShow: "hidden"
    })
  }
  formHide() {    
    store.dispatch( {
        type: "formShow",
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
