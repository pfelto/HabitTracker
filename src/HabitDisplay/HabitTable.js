export const HabitTable = (props) => {
  const HabitTable = props.HabitData.map((habit) => (
    <div key={habit.id}>
      <h1>{habit.habitName}</h1>
      <h3>{habit.habitStart}</h3>
      <div style={{ display: "flex" }}>
        {habit.habitTracker.map((habitTrackerSquare, index) => (
          <div
            onClick={() => {
              props.handleClick(habit.id, index);
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
            {habitTrackerSquare.date}
          </div>
        ))}
      </div>
    </div>
  ));
  return <div>{HabitTable}</div>;
};
