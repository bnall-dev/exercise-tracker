import React, { useState } from "react";

function CreateWorkout() {
  const [newReps, setNewReps] = useState();
  const [newSets, setNewSets] = useState();

  return (
    <div id="createWorkout">
      <h3> Add Workout</h3>
      Reps:{" "}
      <input
        onChange={e => {
          setNewReps(e.target.value);
        }}
      />
      Sets:{" "}
      <input
        onChange={e => {
          setNewSets(e.target.value);
        }}
      />
      <div> New Reps: {newReps} </div>
      <div> New Sets: {newSets} </div>
      <button> Add </button>
    </div>
  );
}

export default CreateWorkout;
