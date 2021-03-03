import { useState } from 'react';
import styled from '@emotion/styled';
import { getYearDiference, calculateBrand, getPlan } from '../helper';

const Field = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;

const Label = styled.label`
  flex: 0 0 100px;
`;

const Select = styled.select`
  display: block;
  width: 100%;
  padding: 1rem;
  border: 1px solid #e1e1;
  border-radius: 5px;
  -webkit-appearance: none;
`;

const InputRadio = styled.input`
  margin: 0 1rem;
`

const Button = styled.button`
  background-color: #00838f;
  font-size: 16px;
  width: 100%;
  padding: 1rem;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  margin-top: 20px;
  transition: background-color .3s ease;

  &:hover {
    cursor: pointer;
    background-color: #26c6da;
  }
`;

const Error = styled.div`
  background-color: red;
  color: #fff;
  padding: 1rem;
  width: 100%;
  text-align: center;
  margin-bottom: 2.5rem;
`;

const Form = () => {

  const [ data, setData ] = useState({
    brand: '',
    year: '',
    plan: ''
  });

  const [ error, setError ] = useState(false)

  const { brand, year, plan } = data;

  const handleChange = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();

    if ( brand.trim() === '' || year.trim() === '' || plan.trim() === '') {
      return setError(true);
    }

    setError(false);

    // Base of 2000
    let result = 2000;

    // get years diference
    const difference = getYearDiference(year)

    // For each year we need to rest the 3%
    result -= (( difference * 3) * result) / 100;

    // Up price by: American = 15% / Asian = 5% / European = 30%
    result = calculateBrand(brand) * result;

    // Plan 50% or 20%
    result = parseFloat(result * getPlan(plan)).toFixed(2);

    console.log(result);

  }

  return ( 
    <form
      onSubmit={handleSubmit}
    >
      { error ? <Error>All blanks are required</Error> : null }

      <Field>
        <Label>Brand</Label>
        <Select
          name='brand'
          value={brand}
          onChange={handleChange}
        >
          <option value="">-- Select --</option>
          <option value="american">American</option>
          <option value="european">European</option>
          <option value="asian">Asian</option>
        </Select>
      </Field>

      <Field>
        <Label>Year</Label>
        <Select
          name='year'
          value={year}
          onChange={handleChange}
        >
          <option value="">-- Select --</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
        </Select>
      </Field>

      <Field>
        <Label>Plan</Label>
        <InputRadio type="radio"
          name='plan'
          value='basic'
          checked={plan === 'basic'}
          onChange={handleChange}
          /> Basic

        <InputRadio type="radio"
          name='plan'
          value='complete'
          checked={plan === 'complete'}
          onChange={handleChange}
        /> Complete
      </Field>

      <Button type='submit'>Search</Button>
    </form>
   );
}
 
export default Form;