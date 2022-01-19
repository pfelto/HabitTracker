import React from "react";
import { HabitTable } from "./HabitDisplay/HabitTable";
import { HabitForm } from "./HabitForm/HabitForm";
import { SubmitButton } from "./HabitForm/SubmitButton";
import { TextInput } from "./HabitForm/TextInput";
import { useDataApi } from "./Hook/useDataApi";

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
        />
      </section>
    </div>
  );
}

export default App;
