import React, { Component, Fragment } from 'react';
import {createPortal} from 'react-dom'

class Portals extends Component{
  render(){
    return createPortal(<Message />, document.getElementById("touch"))
  }
}

const Message = () => "Just touched this!"

class ReturnTypes extends Component {
  render(){
    return "Hello~~~";
  }
}

class App extends Component {
  render() {
    return (
      <Fragment>
        <ReturnTypes/>
        <Portals/>
      </Fragment>
    );
  }
}

export default App;
