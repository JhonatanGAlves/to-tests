import React from 'react';
import './App.css';
import ListPerson from './components/data/ListPerson';
import InputState, { ExerciseInputState } from './components/InputState';
import ConditionalRendering from './components/ConditionalRendering';

function App() {
  return (
    <>
      <div className="App">
        <InputState />
        <hr />
        <ExerciseInputState />
        <hr />
        <ListPerson />
      </div>
      <hr />
      <div className="App">
        <ConditionalRendering />
      </div>
    </>
  );
}

export default App;
