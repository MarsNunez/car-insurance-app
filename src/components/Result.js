import styled from '@emotion/styled';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const Message = styled.p`
  background-color: rgb(127, 224, 237);
  margin-top: 2rem;
  padding: 1rem;
  text-align: center;
`;

const QuoteResult = styled.div`
  text-align: center;
  padding: .5rem;
  border: 1px solid #26c6da;
  background-color: rgb(127, 224, 237);
  margin-top: 1rem;
  position: relative;
`

const QuoteText = styled.p`
  color: #00838f;
  padding: 1rem;
  text-transform: uppercase;
  font-weight: bold;
  margin: 0;
`

const Result = ({ search }) => {

  return (
    (search === 0) ? <Message>Choose a Brand, Year and a Plan.</Message> 
    : 
    <QuoteResult>
      <TransitionGroup
        component='p'
        className='resultado'
      >
        <CSSTransition
          classNames='resultado'
          key={search}
          timeout={{enter: 500, exit: 500}}
        >
          <QuoteText>Total: $ {search}</QuoteText>
        </CSSTransition>
      </TransitionGroup>
    </QuoteResult>
  )
}
 
export default Result;

