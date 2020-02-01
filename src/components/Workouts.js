import React, { useState } from "react";
import CreateWorkout from "./CreateWorkout";
import { getUser } from "../utils/utils";
import "../App.css";
function Workouts() {
  const [showAddWorkout, setShowAddWorkout] = useState(false);

  return (
    <div id="workouts">
      <h2> Workouts </h2>
      <div className="workoutListing">
        <h4> Bicep Curls </h4>
        <p> 10 reps, 3 sets </p>
        <button
          onClick={e => {
            setShowAddWorkout(!showAddWorkout);
          }}
        >
          +
        </button>
        {showAddWorkout ? <CreateWorkout /> : null}
      </div>
    </div>
  );
}

export default Workouts;
