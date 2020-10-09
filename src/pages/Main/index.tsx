import React, { FormEvent, useState } from 'react';
import './styles.css';



const Main: React.FC = () => {
  const [binary, setBinary] = useState('');
  const [result, setResult] = useState<number>();
  const [errorMessage, setErrorMessage] = useState('');

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setErrorMessage('');
    let error = false;
    const parsed = binary.split('').reverse().map(letter => {
      if (letter !== '0' && letter !== '1') {
        error = true;
        setErrorMessage('Only insert "0" or "1" ');

      }
      return parseInt(letter);
    });
    if (parsed.length === 0) {
      error = true;
      setErrorMessage('Insert some value');
    }

    if (error) {
      return;
    }


    const result = parsed.reduce((accumulator, value, index) => {
      accumulator += Math.pow(2 * value, index);
      return accumulator;
    });
    setResult(result);
  };


  return (
    <div className="container">
      <div className="title">
        <h1>Binary to Decimal Converter</h1>
      </div>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <label htmlFor="value">Insert a number</label>
          <input type="text" placeholder="Value" onChange={(e) => setBinary(e.target.value)} />
          {errorMessage && (<p>{errorMessage}</p>)}

          <button type="submit">Convert</button>
        </form>
      </div>

      {result !== 0 && (
        <div className="result">
          <strong>Converted value</strong>
          <p>{result}</p>

        </div>
      )
      }

    </div>
  );
}

export default Main;