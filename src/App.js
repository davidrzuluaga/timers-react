import React, { Component } from 'react';
import { Row, Grid, Col } from 'react-bootstrap'
import './App.css';
import Timers from './components/timers';
import New from './components/newOne';
import Clock from './components/clock';


class App extends Component {
  render() {
    return (
      <Grid>
        <Row>
        <div className="title"><h3>Timers</h3></div>
            <Clock />
          <Col smOffset={1} >
            <Timers />
            <New />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
