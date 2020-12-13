import styled from 'styled-components';
import { CardSection } from '../../shared/CardSection';

export const QuestionWrapper = styled(CardSection)`
  &::after {
    content: attr(data-error);
    padding: 0.8rem;
    color: red;
  }
`;
