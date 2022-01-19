import { useState, useEffect } from "react";
import { CellColors } from "../utils/colors";
import { getToday } from "../utils/today";

export function useDataApi() {
  const [habitInput, setHabitInput] = useState("");
  const [habitData, setHabitData] = useState([]);
  const [myError, setMyError] = useState(null);
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    let _isMounted = true;
    setStatus("pending");
    fetch(`http://localhost:3001/habits`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          if (_isMounted) {
            const Error400 = new Error("4** Error while loading");
            setMyError(Error400);
            setStatus("rejected");
            throw Error400;
          }
        }
      })
      .then((data) => {
        if (_isMounted) {
          setHabitData(data);
          setStatus("resolved");
        }
      })
      .catch((error) => {
        if (_isMounted) {
          setMyError(error);
          setStatus("rejected");
        }
      });
    if (_isMounted)
      return () => {
        _isMounted = false;
      };
  }, []);

  function changeInput(e) {
    setHabitInput(e.target.value);
  }

  //need a handle submit function here that does fetch POST to "http://localhost:3001/habits"
  function handleSubmit(e) {
    e.preventDefault();
    const today = new Date();
    const todayString = `${
      today.getMonth() + 1
    }/${today.getDate()}/${today.getFullYear()}`;
    console.log(`submitted on ${todayString}`);
    console.log(habitInput);

    const nextId =
      habitData.length !== 0 ? habitData[habitData.length - 1].id + 1 : 1;
    console.log(nextId);
    const newHabit = {
      id: nextId,
      habitName: habitInput,
      habitStart: todayString,
      habitTracker: Array(28)
        .fill()
        .map((_, index) => {
          const startDate = new Date(todayString);
          startDate.setDate(startDate.getDate() + index);
          const stringDate = `${
            startDate.getMonth() + 1
          }/${startDate.getDate()}/${startDate.getFullYear()}`;

          return {
            checked: false,
            date: stringDate,
          };
        }),
    };
    console.log(newHabit);
    //setHabitData([...habitData, newHabit]);
    setStatus("pending");
    fetch(`http://localhost:3001/habits`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newHabit),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          const Error400 = new Error("4** Error while adding");
          setMyError(Error400);
          setStatus("rejected");
          throw Error400;
        }
      })
      .then((data) => {
        setHabitData([...habitData, newHabit]);
        setStatus("resolved");
      })
      .catch((error) => {
        setMyError(error);
        setStatus("rejected");
      });
    setHabitInput("");
  }

  //need to have a delete function here that does fetch Delete to "http://localhost:3001/habits/id"
  function removeHabit(habitId) {
    console.log(habitId);
    //habitId = 10000000;
    const removedHabits = habitData.filter((habit) => habit.id !== habitId);
    setStatus("pending");
    fetch(`http://localhost:3001/habits/${habitId}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          const Error400 = new Error("4** Error when deleting");
          setMyError(Error400);
          setStatus("rejected");
          throw Error400;
        }
      })
      .then((data) => {
        setHabitData(removedHabits);
        setStatus("resolved");
      })
      .catch((error) => {
        setMyError(error);
        setStatus("rejected");
      });
  }

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
    //setHabitData(updatedHabitData);
    setStatus("pending");
    fetch(`http://localhost:3001/habits/${habitId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(object),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          const Error400 = new Error("4** Error when updating");
          setMyError(Error400);
          setStatus("rejected");
          throw Error400;
        }
      })
      .then((data) => {
        setHabitData(updatedHabitData);
        setStatus("resolved");
      })
      .catch((error) => {
        setMyError(error);
        setStatus("rejected");
      });
  }

  function cellStatus(ArrayObject) {
    const trackerDate = new Date(ArrayObject.date);
    if (ArrayObject.checked === true) return CellColors.checked;
    if (trackerDate.getTime() < getToday().getTime()) return CellColors.wrong;
    return CellColors.available;
  }

  const streak = (habit) => {
    const habitStreak = habit.habitTracker;

    const indexOfToday = habitStreak.findIndex((element) => {
      const dateInElement = new Date(element.date);
      return dateInElement.getTime() === getToday().getTime();
    });

    if (indexOfToday < 3) return "black";
    if (
      habitStreak[indexOfToday - 1].checked === true &&
      habitStreak[indexOfToday - 2].checked === true &&
      habitStreak[indexOfToday - 3].checked === true
    )
      return "green";
    else return "red";
  };

  const habitTrackerDisabled = (ArrayObject) => {
    const trackerDate = new Date(ArrayObject.date);
    if (trackerDate.getTime() > getToday().getTime()) return true;
    return false;
  };

  const retObject = {
    status,
    handleSubmit,
    habitInput,
    changeInput,
    myError,
    habitData,
    cellStatus,
    changeHabitChecked,
    removeHabit,
    streak,
    habitTrackerDisabled,
  };
  return retObject;
}
