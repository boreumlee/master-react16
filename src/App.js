import React, { Component, Fragment } from 'react';
import {createPortal} from 'react-dom'

const BoundaryHOC = ProtectedComponent => class Boundary extends Component {
  state={
    hasError: false
  }
  componentDidCatch = () =>{
    this.setState({
      hasError:true
    })
  }
  render(){
    const {hasError} = this.state
    if(hasError){
      return <ErrorFallback />
    } else {
      return <ProtectedComponent />
    }
  }
}

class ErrorMaker extends Component{
  state={
    friends: ["aa","bb","xx","dd"]
  };
  componentDidMount = () =>{
    setTimeout(()=>{
      this.setState({
        friends:undefined
      }) // 이렇게 state의 friends가 undefined가 되거나 데이터들이 사라지는 경우가 굉장이 허다함
    }, 2000);
  }
  render(){
    //state에서 friends를 가져와 array로 만든것
    const {friends} = this.state;
    return friends.map(friend => ` ${friend} `)
  }
}

const PErrorMaker = BoundaryHOC(ErrorMaker)

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

const PPortals = BoundaryHOC(Portals)

const ErrorFallback = () => "Sorry something went wrong";

class App extends Component {
  render() {
    return (
      <Fragment>
        <ReturnTypes/>
        <PPortals/>
        <PErrorMaker />
      </Fragment>
    );
  }
}

export default App;
