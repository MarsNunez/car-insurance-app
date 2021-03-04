import styled from '@emotion/styled';
import { capitalize } from '../helper';

const ContainerSummary = styled.div`
  padding: 1rem;
  text-align: center;
  background-color: #00838f;
  color: #fff;
  margin-top: 1rem;
`

const Summary = ({ data }) => {

  const { brand, year, plan } = data;

  if (brand === '' || year === '' || plan === '') return null

  return ( 
    <ContainerSummary>
      <h2>Quote Summary</h2>
      <ul>
        <li>Brand: {capitalize(brand)}</li>
        <li>Plan: {capitalize(plan)}</li>
        <li>Year: {year}</li>
      </ul>
    </ContainerSummary>
   );
}
 
export default Summary;

