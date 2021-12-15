import React from 'react';
import './App.css';
import ListPerson from './components/data/ListPerson';
import InputState, { ExerciseInputState } from './components/InputState';

function App() {
  return (
    <div className="App">
      <InputState />
      <hr />
      <ExerciseInputState />
      <hr />
      <ListPerson />
    </div>
  );
}

export default App;
