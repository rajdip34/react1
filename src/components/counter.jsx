import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 0
  };
  styles = {
    fontSize: 15,
    fontWeight: "bold"
  };
  render() {
    return (
      <React.Fragment>
        <span className={this.getBoots()}>{this.valuCunt()}</span>
        <button className="btn btn-secondary btn-sm">click me </button>
      </React.Fragment>
    );
  }
  getBoots() {
    let boots = "bage m-2 badge-";
    boots += this.state.count === 0 ? "worning" : "primary";
    return boots;
  }

  valuCunt() {
    return this.state.count === 0 ? "Zero" : this.state.count;
  }
}

export default Counter;
