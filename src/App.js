import React, { useState, useEffect } from "react";
import CreateExercise from "./components/CreateExercise";
import Workouts from "./components/Workouts";
import "./App.css";
import { getUser } from "./utils/utils";

function App() {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    setUserData(getUser());
    console.log(getUser());
  }, []);

  return (
    <div id="app">
      <p> {userData.user} Logged In</p>
      <CreateExercise />
      <Workouts />
    </div>
  );
}

export default App;
