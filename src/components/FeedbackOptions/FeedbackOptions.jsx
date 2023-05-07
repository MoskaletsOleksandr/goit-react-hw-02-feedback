// import PropTypes from 'prop-types';
import { Component } from 'react';
import { FeedbackButton } from './FeedbackOptions.styled';
import { Section } from 'components/common/Section';

export class FeedbackOptions extends Component {
  render() {
    return (
      <Section title="Please leave feedback">
        {this.props.options.map(stat => {
          return (
            <FeedbackButton
              name={stat}
              key={stat}
              type="button"
              onClick={this.props.onLeaveFeedback}
            >
              {stat}
            </FeedbackButton>
          );
        })}
      </Section>
    );
  }
}
