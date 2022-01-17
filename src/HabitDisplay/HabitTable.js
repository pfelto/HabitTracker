export const HabitTable = (props) => {
  const HabitTable = props.HabitData.map((habit) => (
    <div
      key={habit.id}
      style={{
        display: "flex",
        border: "1px solid black",
        margin: "2px",
        padding: "5px",
      }}
    >
      <div style={{ flex: 5 }}>
        <h1>{habit.habitName}</h1>
        <h3>{habit.habitStart}</h3>
        <p>{habit.id}</p>
        <div className="HabitTable">
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
      <button
        style={{ alignSelf: "flex-start" }}
        onClick={() => {
          props.handleRemove(habit.id);
        }}
      >
        X
      </button>
    </div>
  ));
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>{HabitTable}</div>
  );
};
