import { useState, useEffect, useRef } from 'react';

const FizzBuzz = () => {
  const [fizzBuzzValues, setFizzBuzzValues] = useState<Record<string, number>>({
    fizz: 3,
    buzz: 5,
  });
  const [newKey, setNewKey] = useState<string>('Fazz');
  const [newValue, setNewValue] = useState<number>(7);
  const [fizzBuzzNotification, setFizzBuzzNotification] = useState<string>('nothing to warn about!');
  const [fizzBuzzOutput, setFizzBuzzOutput] = useState<string>('');

  const getAllKeyValuePairs = (): string => {
    let result = '';
    for (const [key, value] of Object.entries(fizzBuzzValues)) {
      result += `${key}: ${value} \n`;
    }
    return result;
  };

  const addDictionaryPair = (): void => {
    if (newKey === null) {
      setFizzBuzzNotification('key cannot be null!');
    } else if (fizzBuzzValues.hasOwnProperty(newKey)) {
      setFizzBuzzNotification(`key already exists! ${fizzBuzzValues[newKey]}`);
      return;
    } else if (newKey.includes(' ')) {
      setFizzBuzzNotification('key has a space!');
      return;
    }

    const updatedFizzBuzzValues = { ...fizzBuzzValues, [newKey]: newValue };
    setFizzBuzzValues(updatedFizzBuzzValues);
    setFizzBuzzNotification('key added');
  };

  const fizzBuzz = (): void => {
    let output = '';
    for (let i = 1; i <= 100; i++) {
      output += `${i}: `;
      const matchingKeys = Object.entries(fizzBuzzValues)
        .filter(([, value]) => i % value === 0)
        .map(([key]) => key);

      output += matchingKeys.length > 0 ? matchingKeys.join('') : i.toString();
      output += '\n';
    }
    setFizzBuzzOutput(output);
  };

  const handleNavbarClick = (): void => {
    console.log('navbarClicked');
    navbarHeightManager('up');
  };

  const navbarHeightManager = (input: 'up' | 'down'): void => {
    const navbarElement = document.getElementById('Navbar');
    if (!navbarElement) return;

    const navbarHeight = navbarElement.style.height;

    if (input === 'down' || navbarHeight === '9rem') {
      navbarElement.style.height = '1rem';
    } else if (input === 'up' || navbarHeight === '1rem') {
      navbarElement.style.height = '9rem';
    } else {
      console.warn('error, scroll direction fail');
    }
  };

  return (
    <div>
      <div id="Navbar" onClick={handleNavbarClick}>
        <p>
          Printing all the number from 1-100, 
          but if an item with the flag exists
          add it's key to the list
        </p>
      </div>
      <h2>fizzbuzz output</h2>
  <br />
  <p>
    fizz = 3
    <br />
    buzz = 5
    <br />
  </p>
  <h4>current fizzBuzzValues</h4>
  <p>{getAllKeyValuePairs()}</p>
  <h3>add a custom value!</h3>
  <div>
    <div style={{ display: 'flex', justifyContent: 'space-between', width: '30rem' }}>
      <label htmlFor="fname">custom key:</label>
      <input type="text" id="fname" name="fname" value={newKey} onChange={(e) => setNewKey(e.target.value)} />
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-between', width: '30rem' }}>
      <label htmlFor="fname">custom value:</label>
      <input
        type="text"
        id="fname"
        name="fname"
        placeholder='7'
        value={newValue}
        onChange={(e) => setNewValue(parseInt(e.target.value))}
      />
    </div>
  </div>
  <br/>
  <br/>
  <button onClick={addDictionaryPair}>click to add value!</button>
  <br/>
  <br/>
  <button onClick={fizzBuzz}>click to run!</button>
  <br/>
  <br/>
  <p>errors to report:</p>
  <p>{fizzBuzzNotification}</p>
  <h3>fizzbuzz output:</h3>
  <p style={{ whiteSpace: 'pre-line' }}>{fizzBuzzOutput}</p>
</div>
  );
  };

export default FizzBuzz;