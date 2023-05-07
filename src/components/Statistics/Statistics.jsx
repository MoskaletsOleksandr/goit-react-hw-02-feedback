// import PropTypes from 'prop-types';
import { Component } from 'react';
import { StatisticValue } from './Statistics.styled';
import { Section } from 'components/common/Section';

export class Statistics extends Component {
  render() {
    return (
      <Section title="Statistics">
        {this.props.arrayOfStatsKeys.map(stat => {
          return (
            <StatisticValue key={stat}>
              {stat}: {this.props.state[stat]}
            </StatisticValue>
          );
        })}
        <StatisticValue>Total: {this.props.total}</StatisticValue>
        <StatisticValue>
          Positive feedback: {this.props.positivePercentage}%
        </StatisticValue>
      </Section>
    );
  }
}
