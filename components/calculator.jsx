import React, { useState } from 'react'

export default () => {
  const [number1, setNumber1] = useState('')
  const [number2, setNumber2] = useState('')
  const [operator, setOperator] = useState('')
  const [result, setResult] = useState('')

  return (
    <div className="calculator">
      <div className="title">Simple Calculator</div>
      <div className="title">Enter two numbers to calculate</div>
      <div className="form">
        <input
          type="text"
          name="number1"
          value={number1}
          onChange={event => setNumber1(event.target.value)}
        />
        <select name="operator" value={operator}>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
        <input
          type="text"
          name="number2"
          value={number2}
          onChange={event => setNumber2(event.target.value)}
        />
        <button type="button">=</button>
        <input value={result} readOnly />
      </div>

    </div>
  )
}
