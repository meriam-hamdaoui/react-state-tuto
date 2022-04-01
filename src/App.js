// rce
import React, { Component } from 'react';
import {Button} from 'react-bootstrap';



export class App extends Component {
  //constructor
  constructor(props) {
    super(props);
    this.state = {
      count:0
    };
  }

  render() {
    return (
      <div className='App'>
        <p style ={{color : 'red', fontSize : '25px'}}>You clicked {this.state.count} times</p>
        <Button onClick={() => this.setState({ count: this.state.count + 1 })} 
                variant="primary">Click me</Button>{' '}        
      </div>
    )
  }
}

export default App;