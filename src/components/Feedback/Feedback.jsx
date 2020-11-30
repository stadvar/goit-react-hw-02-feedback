import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import Statistics from '../Statistics/Statistics';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Section from '../Section/Section';
import Notification from '../Notification/Notification';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    let total = 0;
    for (const value in this.state) {
      total += this.state[value];
    }
    return total;
  };
  countPositiveFeedbackPercentage = () => {
    const count = Math.round(
      (this.state.good * 100) / this.countTotalFeedback(),
    );
    return Number.isNaN(count) ? 0 : count;
  };

  handleButtonClick = label => {
    this.setState(prevState => {
      return {
        [label]: prevState[label] + 1,
      };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = [
      { id: 'id-1', label: 'good' },
      { id: 'id-2', label: 'neutral' },
      { id: 'id-3', label: 'bad' },
    ];
    return (
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={this.handleButtonClick}
        />
        {this.countTotalFeedback() === 0 ? (
          <Notification message="No feedback messages" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    );
  }
}

export default Feedback;
