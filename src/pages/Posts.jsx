import React, { Component } from "react";
import axios from "axios";

export default class Posts extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      dataFetched: false,
    };
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      this.setState({ posts: res.data, dataFetched: true });
    });
  }

  render() {
    return (
      <div>
        {this.state.dataFetched &&
          this.state.posts.map((item) => {
            return (
              <div
              key={item.id}
                style={{
                  background: "grey",
                  color: "white",
                  margin: "10px",
                  padding: "10px",
                }}
              >
                <div>
                  <span>title : </span>
                  <span>{item.title}</span>
                </div>
                <div>
                  <span>body : </span>
                  <span>{item.body}</span>
                </div>
              </div>
            );
          })}
      </div>
    );
  }
}
