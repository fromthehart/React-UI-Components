import React from 'react';
import './Button.scss';

const NumberButton = (props) => {
  return(
    <button className={props.buttonStyle} onClick={props.clickHandler}>{props.num}</button>
  )
}

export default NumberButton;