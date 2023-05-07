// import PropTypes from 'prop-types';
import { Component } from 'react';
import {
  StatisticList,
  StatisticItem,
  StatisticValue,
} from './Statistics.styled';
import { Section } from 'components/common/Section';
import { Notification } from 'components/Notification';

export class Statistics extends Component {
  render() {
    return (
      <Section title="Statistics">
        {!this.props.total ? (
          <Notification message="There is no feedback" />
        ) : (
          <StatisticList>
            {this.props.arrayOfStatsKeys.map(stat => {
              return (
                <StatisticItem key={stat}>
                  <StatisticValue>
                    {stat}: {this.props.state[stat]}
                  </StatisticValue>
                </StatisticItem>
              );
            })}
            <StatisticItem>
              <StatisticValue>Total: {this.props.total}</StatisticValue>
            </StatisticItem>
            <StatisticItem>
              <StatisticValue>
                Positive feedback: {this.props.positivePercentage}%
              </StatisticValue>
            </StatisticItem>
          </StatisticList>
        )}
      </Section>
    );
  }
}
