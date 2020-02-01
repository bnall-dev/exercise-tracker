import React from 'react';
import CreateExercise from './components/CreateExercise';
import Workouts from './components/Workouts';
import './App.css';

function App() {
  return (
    <div id="app">
      <CreateExercise />
      <Workouts />
    </div>
  );
}

export default App;
