import React from 'react';
import CreateWorkout from './CreateWorkout';
import { getUser } from '../utils/utils'

function Workouts() {
  getUser();
  return (
    <div id="workouts">
    <h2> Workouts </h2>
      <CreateWorkout />
    </div>
  );
}

export default Workouts;
