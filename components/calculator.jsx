/* eslint-disable max-len */
import React, { useState } from 'react'

export default () => {
  const [number1, setNumber1] = useState('')
  const [number2, setNumber2] = useState('')
  const [operator, setOperator] = useState('')
  const [result, setResult] = useState('')
  const [error, setError] = useState('')

  const calculate = () => {
    if (Number(number1) && Number(number2)) {
      if (error) setError('')
      switch (operator) {
        case '+':
          setResult(parseFloat(number1) + parseFloat(number2))
          break
        case '-':
          setResult(parseFloat(number1) - parseFloat(number2))
          break
        case '*':
          setResult(parseFloat(number1) * parseFloat(number2))
          break
        case '/':
          setResult(parseFloat(number1) / parseFloat(number2))
          break
        default:
          setResult(parseFloat(number1) + parseFloat(number2))
      }
    } else {
      setError('Don\'t be silly, enter real numbers!!')
      setResult('')
    }
  }
  return (
    <div className="calculator">
      <div className="title">Simple React Calculator</div>
      <div className="subtitle">
        Enter two numbers to
        <div className="scroll">
          <span>Add</span>
          <span>Subtract </span>
          <span>Multiply</span>
          <span>Divide</span>
        </div>
      </div>
      <div className="form">
        <input
          type="text"
          name="number1"
          className="number1"
          value={number1}
          onChange={event => setNumber1(event.target.value)}
        />
        <select className="operator" name="operator" value={operator} onChange={event => setOperator(event.target.value)}>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
        <input
          type="text"
          name="number2"
          className="number2"
          value={number2}
          onChange={event => setNumber2(event.target.value)}
        />
        <button className="equalButton" type="button" onClick={calculate}>=</button>
        <input className="result" type="text" value={result} readOnly />
        <div className="error">{error}</div>
      </div>
    </div>
  )
}
