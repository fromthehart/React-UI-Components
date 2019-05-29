import React from 'react';
import './App.scss';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

const App = () => {
  // Calculator button layout as an array
  const calculatorButtons = [
    ['clear', '÷'],
    ['7', '8', '9', '×'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '=']
  ]
    
  return (
    <div className="app">
      <CalculatorDisplay />
      {
        calculatorButtons.map(row => {
          return (

            // Iterate over each row of buttons as represented in the calculatorButtons array
            row.map((button, index) => {

              let style = 'normal';
              // If a row only has two keys, the first button should be wide
              if (row.length === 2 && index === 0) {
                style = 'wide';
              // If this is the last button in a row, make it red
              } else if (index === row.length - 1) {
                style = 'red';
              }  

              return (
                '0123456789'.includes(button) ? // If the button has a number on it
                  <NumberButton num={button} buttonStyle={style} />: // ... then output a NumberButton
                  <ActionButton action={button} buttonStyle={style} /> // ... else output an ActionButton
              )
            })
          )
        })
      }
    </div>
  );
};

export default App;