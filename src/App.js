import React, { useState } from "react";
import { HabitTable } from "./HabitDisplay/HabitTable";
import { HabitForm } from "./HabitForm/HabitForm";
import { SubmitButton } from "./HabitForm/SubmitButton";
import { TextInput } from "./HabitForm/TextInput";

let TODAY = new Date();
TODAY.setHours(0, 0, 0, 0);

const currentID = 3;

const HabitData = [
  {
    habitID: 1,
    habitName: "Code 1 hour a day at 6:30am",
    habitStart: "01/13/2022",
    habitTracker: Array(30)
      .fill()
      .map((_, index) => {
        let startDate = new Date("01/13/2022");
        startDate.setDate(startDate.getDate() + index);
        return {
          checked: false,
          date: startDate,
        };
      }),
  },
  {
    habitID: 2,
    habitName: "Stretch 15 minutes a day at 6am",
    habitStart: "12/25/2021",
    habitTracker: Array(30)
      .fill()
      .map((_, index) => {
        let startDate = new Date("12/25/2021");
        startDate.setDate(startDate.getDate() + index);
        return {
          checked: false,
          date: startDate,
        };
      }),
  },
];

//`${startDate.getMonth() + 1}/${startDate.getDate()}`
const CellColors = {
  checked: "green",
  wrong: "red",
  available: "gray",
};

function App() {
  const [habitInput, setHabitInput] = useState("");
  const [habitData, setHabitData] = useState(HabitData);

  function changeInput(e) {
    setHabitInput(e.target.value);
  }

  function changeHabitChecked(habitId, checkedIndex) {
    console.log(`You clicked on square ${checkedIndex} of ${habitId}`);
    let object = habitData.find((habit) => habit.habitID === habitId);
    const checkedTracker = object.habitTracker.map((element, index) => {
      return index === checkedIndex
        ? { ...element, checked: !element.checked }
        : element;
    });
    object = { ...object, habitTracker: checkedTracker };
    const updatedHabitData = habitData.map((habit) => {
      if (habit.habitID === object.habitID) {
        return object;
      }
      return habit;
    });
    setHabitData(updatedHabitData);
  }

  function cellStatus(ArrayObject) {
    if (ArrayObject.checked === true) return CellColors.checked;
    if (ArrayObject.date.getTime() < TODAY.getTime()) return CellColors.wrong;
    return CellColors.available;
  }

  return (
    <div className="App">
      <HabitForm>
        <TextInput habitInput={habitInput} handleChange={changeInput} />
        <SubmitButton />
      </HabitForm>
      <HabitTable
        HabitData={habitData}
        status={cellStatus}
        handleClick={changeHabitChecked}
      />
    </div>
  );
}

export default App;
