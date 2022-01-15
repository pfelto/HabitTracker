export const HabitTable = (props) => {
  const HabitTable = props.HabitData.map((habit) => (
    <div key={habit.habitID}>
      <h1>{habit.habitName}</h1>
      <h3>{habit.habitStart}</h3>
      <div style={{ display: "flex" }}>
        {habit.habitTracker.map((habitTrackerSquare, index) => (
          <div
            onClick={() => {
              props.handleClick(habit.habitID, index);
            }}
            style={{
              border: "1px solid black",
              padding: "5px",
              margin: "2px",
              cursor: "pointer",
              background: props.status(habitTrackerSquare),
            }}
            key={index}
          >
            {habitTrackerSquare.date.getMonth() + 1}/
            {habitTrackerSquare.date.getDate()}
          </div>
        ))}
      </div>
    </div>
  ));
  return <div>{HabitTable}</div>;
};

/* 
      {HabitData.map((habit) => (
        <div key={habit.habitID}>
          <h1>{habit.habitName}</h1>
          <h3>{habit.habitStart}</h3>
          {habit.habitTracker.map((habitTrackerSquare, index) => (
            <li key={index}>{habitTrackerSquare}</li>
          ))}
        </div>
      ))}*/
