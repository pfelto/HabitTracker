import React, { useState } from "react";
import { HabitForm } from "./HabitForm/HabitForm";
import { SubmitButton } from "./HabitForm/SubmitButton";
import { TextInput } from "./HabitForm/TextInput";

const HabitData = [
  {
    habitID: 1,
    habitName: "Code 1 hour a day at 6:30am",
    habitStart: "1/13",
    habitTracker: Array(30).fill(""),
  },
  {
    habitID: 2,
    habitName: "Stretch 15 minutes a day at 6am",
    habitStart: "12/25",
    habitTracker: Array(30).fill("X"),
  },
];

function App() {
  const [habitInput, setHabitInput] = useState("");

  function changeInput(e) {
    setHabitInput(e.target.value);
  }

  return (
    <div className="App">
      <HabitForm>
        <TextInput habitInput={habitInput} handleChange={changeInput} />
        <SubmitButton />
      </HabitForm>
      {HabitData.map((habit) => (
        <div key={habit.habitID}>
          <h1>{habit.habitName}</h1>
          <h3>{habit.habitStart}</h3>
          {habit.habitTracker.map((habitTrackerSquare, index) => (
            <li key={index}>{habitTrackerSquare}</li>
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;
