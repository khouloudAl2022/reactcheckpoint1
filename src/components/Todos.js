import React, { Component } from "react";
import Header from "./Header";
import Text from "./Text";
import Social from "./Social";

class Todos extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Text />
        <Social />
      </div>
    );
  }
}
export default Todos;
