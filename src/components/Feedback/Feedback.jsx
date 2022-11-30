import React, { Component } from 'react';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleGood = e => {
    this.setState(prevState => ({ good: prevState.good + 1 }));
  };

  handleNeutral = e => {
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  };
  handleBad = e => {
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
  };
  render() {
    return (
      <div>
        <h2>Please leave feedback</h2>
        <>
          <button type="button" onClick={this.handleGood}>
            Good
          </button>
          <button type="button" onClick={this.handleNeutral}>
            Neutral
          </button>
          <button type="button" onClick={this.handleBad}>
            Bad
          </button>
        </>
        <h2>Statistics</h2>
        <ul>
          <li>Good: {this.state.good}</li>
          <li>Neutral: {this.state.neutral}</li>
          <li>Bad: {this.state.bad}</li>
        </ul>
      </div>
    );
  }
}
