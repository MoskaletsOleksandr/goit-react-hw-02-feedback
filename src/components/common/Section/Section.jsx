import PropTypes from 'prop-types';
import { SectionStyled } from './Section.styled';
import { SectionTitle } from '../SectionTitle';

export const Section = ({ title, children }) => {
  return (
    <SectionStyled>
      <SectionTitle title={title} />
      {children}
    </SectionStyled>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired
}