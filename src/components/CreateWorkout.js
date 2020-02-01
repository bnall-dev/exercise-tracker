import React, {useState} from 'react';

function CreateWorkout() {

const [newReps, setNewReps] = useState()
const [newSets, setNewSets] = useState()

  return (<form id="createWorkout">
  Reps: <input onChange={ (e) => {setNewReps(e.target.value)}}/>
  Sets: <input onChange={ (e) => {setNewSets(e.target.value)}}/>
  <div> New Reps: {newReps} </div>
  <div> New Sets: {newSets} </div>
  </form>);
}

export default CreateWorkout;
