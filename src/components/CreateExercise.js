import React, { useState } from 'react';

function CreateExercise() {
  let [exercises, setExercises] = useState([]);

  const handleRecordExercise = () => {};
  const handleInputChange = () => {};

  return (
    <div id="createExercise">
      <h2>Create Exercise</h2>
      <form id="exerciseForm" onSubmit={handleRecordExercise}>
        <input
          id="exerciseType"
          type="text"
          value="Exercise Type"
          onChange={handleInputChange}
        ></input>
        <div id="setsRepsDiv">
          <input id="setsInput" type="number"></input>
          <input id="repsInput" type="number"></input>
        </div>
        <input
          id="recordExercise"
          type="submit"
          value="Record Exercise"
        ></input>
      </form>
    </div>
  );
}

export default CreateExercise;
