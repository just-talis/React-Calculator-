import { useReducer } from 'react'
import DigitButtons from './DigitButtons.jsx'
import OperationButtons from './OperationButtons.jsx'
import './App.css'

export const ACTIONS = {
  ADD_DIGIT: 'add-digit',
  CHOOSE_OPERATION: 'choose-operation',
  CLEAR: 'clear',
  DELETE_DIGIT: 'delete-digit',
  EVALUATE: 'evaluate'
}

export default function reducer(state, { type, payload }) {
  switch(type) {
    case ACTIONS.ADD_DIGIT:
      if (payload.digit === '0' && state.currentOperand === '0') {
        return state
      }
      if (payload.digit === '.' && state.currentOperand.currentOperand.includes('.')) {
        return state
      }
      return {
        ...state,
        currentOperand: `${currentOperand || ''}${payload.digit}`,
      }
  }
  
}

  function App() {
   const [{currentOperand, previousOperand, operation}, dispatch] = useReducer(
     reducer, 
    {}
  )
  return (
    <div className='calculator-grid'>
      <div className='output'>
        <div className='previous-operand'>{previousOperand} {operation}</div>
       <div className='current-operand'>{currentOperand}</div>
      </div>
      <button className='span-two'>AC</button>
      <button>DEL</button>
      <OperationButtons opreation='/' dispatch={ dispatch } />
      <DigitButtons digit='1' dispatch={ dispatch } />
      <DigitButtons digit='2' dispatch={ dispatch } />
      <DigitButtons digit='3' dispatch={ dispatch } />
      <OperationButtons operation='*' dispatch={ dispatch } />
      <DigitButtons digit='4' dispatch={ dispatch } />
      <DigitButtons digit='5' dispatch={ dispatch } />
      <DigitButtons digit='6' dispatch={ dispatch } />
      <OperationButtons operation='+' dispatch={ dispatch } />
      <DigitButtons digit='7' dispatch={ dispatch } />
      <DigitButtons digit='8' dispatch={ dispatch } />
      <DigitButtons digit='9' dispatch={ dispatch } />
      <OperationButtons operation='-' dispatch={ dispatch } />
      <DigitButtons digit='.' dispatch={ dispatch } />
      <DigitButtons digit='0' dispatch={ dispatch } />
      <button className='span-two'>=</button>
    </div>
  )
}
