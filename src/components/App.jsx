import React, { Component } from 'react';
import { FeedbackList } from './FeedbackList/FeedbackList';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  changeFeedback = type => {
    this.setState(prevState => ({
      [type]: prevState[type] + 1,
    }));
  };

  countTotalFeedback = () => {
    const totalValues = Object.values(this.state);

    return totalValues.reduce((acc, value) => {
      return acc + value;
    }, 0);
  };
  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100) || 0;
  };

  render() {
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage();
    return (
      <>
        <FeedbackList
          title="Please leave feedback"
          types={Object.keys(this.state)}
          onChangeFeedback={this.changeFeedback}
        />
        <Statistics
          title="Statistics"
          types={this.state}
          totalFeedback={totalFeedback}
          positivePercentage={positiveFeedback}
        />
      </>
    );
  }
}
