import React from 'react';
import CreateWorkout from './CreateWorkout';
import { getUser } from '../utils/utils'
import '../App.css'
function Workouts() {
  getUser();
  return (
    <div id="workouts">
        <h2> Workouts </h2>
    <div className="workoutListing">
      <h4> Bicep Curls </h4>
      <p> 10 reps, 3 sets </p>
      <button>Add</button>
      <CreateWorkout />
    </div>
    </div>
  );
}

export default Workouts;
