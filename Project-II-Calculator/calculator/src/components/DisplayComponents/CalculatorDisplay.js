import React from 'react';
import './Display.scss';

const CalculatorDisplay = (props) => {
  return(
    <div className='calculatorDisplay'>{props.result}</div>
  )
}

export default CalculatorDisplay;