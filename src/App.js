import React, { useState, useEffect } from "react";
import { HabitTable } from "./HabitDisplay/HabitTable";
import { HabitForm } from "./HabitForm/HabitForm";
import { SubmitButton } from "./HabitForm/SubmitButton";
import { TextInput } from "./HabitForm/TextInput";

let TODAY = new Date();
TODAY.setHours(0, 0, 0, 0);

const currentID = 3;

/*
const HabitData = [
  {
    id: 1,
    habitName: "Code 1 hour a day at 6:30am",
    habitStart: "01/13/2022",
    habitTracker: Array(30)
      .fill()
      .map((_, index) => {
        const startDate = new Date("01/13/2022");
        startDate.setDate(startDate.getDate() + index);
        const stringDate = `${
          startDate.getMonth() + 1
        }/${startDate.getDate()}/${startDate.getFullYear()}`;
        return {
          checked: false,
          date: stringDate,
        };
      }),
  },
  {
    id: 2,
    habitName: "Stretch 15 minutes a day at 6am",
    habitStart: "12/25/2021",
    habitTracker: Array(30)
      .fill()
      .map((_, index) => {
        const startDate = new Date("12/25/2021");
        startDate.setDate(startDate.getDate() + index);
        const stringDate = `${
          startDate.getMonth() + 1
        }/${startDate.getDate()}/${startDate.getFullYear()}`;
        return {
          checked: false,
          date: stringDate,
        };
      }),
  },
];
*/
//`${startDate.getMonth() + 1}/${startDate.getDate()}`
const CellColors = {
  checked: "green",
  wrong: "red",
  available: "gray",
};

function App() {
  const [habitInput, setHabitInput] = useState("");
  const [habitData, setHabitData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    let _isMounted = true;
    fetch("http://localhost:3001/habits")
      .then((res) => res.json())
      .then(
        (data) => {
          if (_isMounted) setHabitData(data);
        },
        (error) => {
          if (_isMounted) setError(error);
        }
      );
    if (_isMounted)
      return () => {
        _isMounted = false;
      };
  }, []);

  function changeInput(e) {
    setHabitInput(e.target.value);
  }

  //need a handle submit function here that does fetch POST to "http://localhost:3001/habits"

  // need to add logic to do fetch PUT to "http://localhost:3001/habits"
  function changeHabitChecked(habitId, checkedIndex) {
    console.log(`You clicked on square ${checkedIndex} of ${habitId}`);
    let object = habitData.find((habit) => habit.id === habitId);
    const checkedTracker = object.habitTracker.map((element, index) => {
      return index === checkedIndex
        ? { ...element, checked: !element.checked }
        : element;
    });
    object = { ...object, habitTracker: checkedTracker };
    const updatedHabitData = habitData.map((habit) => {
      if (habit.id === object.id) {
        return object;
      }
      return habit;
    });
    setHabitData(updatedHabitData);
    fetch(`http://localhost:3001/habits/${habitId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(object),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  function cellStatus(ArrayObject) {
    const trackerDate = new Date(ArrayObject.date);
    if (ArrayObject.checked === true) return CellColors.checked;
    if (trackerDate.getTime() < TODAY.getTime()) return CellColors.wrong;
    return CellColors.available;
  }

  //Put something to catch error here

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
