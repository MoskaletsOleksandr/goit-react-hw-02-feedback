// import PropTypes from 'prop-types';
import { Component } from 'react';
import { OptionList, OptionItem, OptionButton } from './FeedbackOptions.styled';
import { Section } from 'components/common/Section';

export class FeedbackOptions extends Component {
  render() {
    return (
      <Section title="Please leave feedback">
        <OptionList>
          {this.props.options.map(stat => {
            return (
              <OptionItem key={stat}>
                <OptionButton
                  name={stat}
                  type="button"
                  onClick={this.props.onLeaveFeedback}
                >
                  {stat}
                </OptionButton>
              </OptionItem>
            );
          })}
        </OptionList>
      </Section>
    );
  }
}
