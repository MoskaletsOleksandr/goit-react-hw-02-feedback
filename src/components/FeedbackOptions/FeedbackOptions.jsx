// import PropTypes from 'prop-types';
import { Component } from 'react';
import { FeedbackButton } from './FeedbackOptions.styled';
import { Section } from 'components/common/Section';

const { options, onLeaveFeedback } = this.props;

export class FeedbackOptions extends Component {
  render() {
    return (
      <Section title="Please leave feedback">
        {options.map(stat => {
          return (
            <FeedbackButton
              name={stat}
              key={stat}
              type="button"
              onClick={onLeaveFeedback}
            >
              {stat}
            </FeedbackButton>
          );
        })}
      </Section>
    );
  }
}
