import React, { Component } from "react";
import Counter ,{add}from "./Counter";

export default class App extends Component {
  render() {
    return (
      <>
        <Counter startvalue={add(1,5)} color={"red"} wowNumber={20}/> 
        <Counter startvalue={999} color={"green"} wowNumber={1010}/>
      </>
    );
  }
}

