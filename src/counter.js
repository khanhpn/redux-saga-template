import React, { Component } from 'react';

const Counter = ({ value1, addValueA }) => {
  const { value } = value1;
  return (
    <div className="App">
      <div className="counter-css">{value}</div>
      <button onClick={addValueA}>Add</button>
    </div>
  );
}

export default Counter;
