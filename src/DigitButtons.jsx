import { ACTIONS } from './App.jsx'

export default function DigitButtons({ dispatch, digit }) {
  return <button onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}>
    {digit}
  </button>
}