// import PropTypes from 'prop-types';
import { Component } from 'react';
import { StatisticValue } from './Statistics.styled';
import { Section } from 'components/common/Section';

const { arrayOfStatsKeys, state, total, positivePercentage } = this.props;

export class Statistics extends Component {
  render() {
    return (
      <Section title="Statistics">
        {arrayOfStatsKeys.map(stat => {
          return (
            <StatisticValue key={stat}>
              {stat}: {state[stat]}
            </StatisticValue>
          );
        })}
        <StatisticValue>Total: {total}</StatisticValue>
        <StatisticValue>
          Positive feedback: {positivePercentage}%
        </StatisticValue>
      </Section>
    );
  }
}
