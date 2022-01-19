import React from "react";
import { HabitTable } from "./HabitDisplay/HabitTable";
import { HabitForm } from "./HabitForm/HabitForm";
import { SubmitButton } from "./HabitForm/SubmitButton";
import { TextInput } from "./HabitForm/TextInput";
import { useDataApi } from "./Hook/useDataApi";
import { getToday } from "./utils/today";

function App() {
  const {
    status,
    handleSubmit,
    habitInput,
    changeInput,
    myError,
    habitData,
    cellStatus,
    changeHabitChecked,
    removeHabit,
  } = useDataApi();

  const inputEmpty = habitInput === "";

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

  //Put something to catch error here
  if (status === "rejected")
    return (
      <div className="App">
        <HabitForm clickSubmit={handleSubmit}>
          <TextInput habitInput={habitInput} handleChange={changeInput} />
          <SubmitButton inputEmpty={inputEmpty} />
        </HabitForm>
        <div>
          <h1>{myError.message}</h1>
        </div>
      </div>
    );

  if (status === "pending")
    return (
      <div className="App">
        <HabitForm clickSubmit={handleSubmit}>
          <TextInput habitInput={habitInput} handleChange={changeInput} />
          <SubmitButton inputEmpty={inputEmpty} />
        </HabitForm>
        <div>
          <h1>Loading...</h1>
        </div>
      </div>
    );

  return (
    <div className="App">
      <div className="header">
        <HabitForm clickSubmit={handleSubmit}>
          <TextInput habitInput={habitInput} handleChange={changeInput} />
          <SubmitButton inputEmpty={inputEmpty} />
        </HabitForm>
      </div>
      <section className="content">
        <HabitTable
          HabitData={habitData}
          status={cellStatus}
          handleClick={changeHabitChecked}
          handleRemove={removeHabit}
          streak={streak}
        />
      </section>
    </div>
  );
}

export default App;
