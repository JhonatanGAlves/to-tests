import React from 'react';
import './App.css';
import ListPerson from './components/data/ListPerson';
import InputState, { ExerciseInputState } from './components/InputState';
import ConditionalRendering from './components/ConditionalRendering';
import ListsAndStyles from './components/listsAndStyles/ListsAndStyles';
import GetRequest from './components/GetRequest';

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
        <hr />
        <ListsAndStyles />
      </div>
      <hr />
      <div className="App">
        <GetRequest />
      </div>
    </>
  );
}

export default App;
