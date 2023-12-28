import './App.css'
import { Display } from './Components/Display'
import { ButtonBar } from './Components/ButtonBar'
import { useState } from 'react'
import { operations } from './utils/operations'

function App() {

  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [sign, setSign] = useState('');

  const addNumber1 = (number) => {
    setNumber1(`${number1}${number}`);
  }

  const addNumber2 = (number) => {
    setNumber2(`${number2}${number}`);
  }

  const changeSign = (newSign) => {
    setSign(newSign);
  }

  const calculate = () => {
    const result = operations[sign](Number(number1), Number(number2));
    setNumber1(result.toString());
    setNumber2('');
    setSign('');
  }
  
  const clearDisplay = () => {
    setNumber1('');
    setNumber2('');
    setSign('');
  }

  return (
    <div className='calculateContain'>

      <div className='calculate'>

        <Display 
          number1={ number1 }
          number2={ number2 }
          sign={ sign } 
        />

        <ButtonBar 
          addNumber1={ addNumber1 }
          addNumber2={ addNumber2 }
          changeSign={ changeSign }
          calculate={ calculate }
          clearDisplay={ clearDisplay }
          sign={ sign }
          number1={ number1 }
        />

      </div>

    </div>
  )
}

export default App
