import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {FormGroup, FormLabel, FormControl} from 'react-bootstrap'


let marked = require("marked");

class App extends Component {

  state = {
    markdown: ""
  }

updateMarkdown = function(markdown){
  this.setState({markdown});
}

  render() {
let {markdown} = this.state;
console.log(markdown);

    return (
      <div className="App container">
      <div>
      <FormGroup controlId="formControlsTextarea">
  <ControlLabel>Markdown Input</ControlLabel>
  <FormControl componentClass="textarea" placeholder="Enter Markdown" value=(markdown) onChange={(event)=>this.updateMarkdown(event.target.value)}> </FormControl>
</FormGroup>
        </div>
        <div>
        <h1>Markdown output</h1>
        <div> {{marked(markdown)}}</div>
        <div dangerouslySetInnerHTML = {{__html: marked(markdown)}}></div>
        </div>
      </div>
    );
  }
}

export default App;
