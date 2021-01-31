import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: props.startvalue,
      wowNumber:props.wowNumber
    };

    this.handleclick = this.handleclick.bind(this);
  }

  componentDidMount() {
    console.log("mounted");
  }
  componentDidUpdate() {
    console.log("updated");
  }

  handleclick() {
    this.setState({
      number: this.state.number + 1,
    });
  }

  render() {
    return (
      <div>
        <div
          style={{
            color: this.props.color,
          }}
        >
          {this.state.number}
          {this.state.number > this.state.wowNumber && "WOOOOOOOWWWW"}

        </div>
        <button onClick={this.handleclick}>add 1</button>
      </div>
    );
  }
}
export function add(x, y) {
  return x + y;
}
