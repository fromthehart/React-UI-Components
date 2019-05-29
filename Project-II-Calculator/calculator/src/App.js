import React from 'react';
import './App.scss';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      calcDisplay: '0',
      keyPress: '',
      actionKey: true // used to ensure we don't accept multiple operators between number inputs, such as 4-*3
    }
  }

  // Partly based on code shared by Joel Perez in standup, with some improvements for filtering out invalid inputs
  buttonClick = (event) => {
    // Save our button press temporarily, after replacing any invalid math operation symbols with ones Javascript understands
    const key = event.target.textContent.replace('×', '*').replace('÷', '/')

    if (key === 'clear') {
      this.setState({calcDisplay: '0', keyPress: '', actionKey: false})
    } else if (key === '=' && !this.state.actionKey) {
      this.setState({calcDisplay: eval(this.state.keyPress), actionKey: false})
      this.setState({keyPress: eval(this.state.keyPress)})      
    } else if ('0123456789'.includes(key)) {
      this.setState({keyPress: `${this.state.keyPress}${key}`, calcDisplay: `${this.state.keyPress}${key}`, actionKey: false})
    } else if (!this.state.actionKey) {
      this.setState({keyPress: `${this.state.keyPress}${key}`, calcDisplay: `${this.state.keyPress}${key}`, actionKey: true})
    }
  }

  render() {
    // Calculator button layout as an array
    const calculatorKeys = [
      ['clear', '÷'],
      ['7', '8', '9', '×'],
      ['4', '5', '6', '-'],
      ['1', '2', '3', '+'],
      ['0', '=']
    ]
      
    return (
      <div className="app">
        <CalculatorDisplay result={this.state.calcDisplay} />
        {
          calculatorKeys.map(row => {
            return (

              // Iterate over each row of keys as represented in the calculatorButtons array
              row.map((button, index) => {

                let style = 'normal'
                // If a row only has two keys, the first key should be wide
                if (row.length === 2 && index === 0) {
                  style = 'wide'
                // If this is the last key in a row, make it red
                } else if (index === row.length - 1) {
                  style = 'red'
                }  

                return (
                  '0123456789'.includes(button) ? // If the key has a number on it
                    <NumberButton num={button} buttonStyle={style} clickHandler={this.buttonClick} />: // ... then output a NumberButton
                    <ActionButton action={button} buttonStyle={style} clickHandler={this.buttonClick} /> // ... else output an ActionButton
                )
              })
            )
          })
        }
      </div>
    )
  }
}

export default App;