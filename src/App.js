import { useState } from 'react';
import styled from '@emotion/styled';
import Header from "./components/Header";
import Form from "./components/Form";
import Summary from './components/Summary';
import Result from './components/Result';
import Spinner from './components/Spinner';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const FormContainer = styled.div`
  background-color: #fff;
  padding: 3rem;
`

function App() {

  const [ summary, setSummary ] = useState({
    search: 0,
    data: {
      brand: '',
      year: '',
      plan: ''
    }
  });

  const [ chargin, setCharging ] = useState(false);

  const { search, data } = summary;

  return (
    <Container>
      <Header title='Car Insurance App' />

      <FormContainer>
        <Form 
          setSummary={setSummary}
          setCharging={setCharging}
        />

        { chargin ? <Spinner /> : null}
        
        <Summary data={data} />

        { !chargin ? <Result search={search}/> : null }
        
      </FormContainer>
    </Container>
  );
}

export default App;

