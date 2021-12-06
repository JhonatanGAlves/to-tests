import React from 'react';
import './App.css';
import InputState, { ExerciseInputState } from './components/InputState';

function App() {
  return (
    <div className="App">
      <InputState />
      <hr />
      <ExerciseInputState />
    </div>
  );
}

export default App;
