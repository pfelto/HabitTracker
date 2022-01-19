import { HabitTracker } from "./HabitTracker";

export const Habit = (props) => {
  const HabitTrackerTable = props.habit.habitTracker.map(
    (habitTrackerSquare, index) => (
      <HabitTracker
        key={index}
        id={props.habit.id}
        index={index}
        habitTrackerSquare={habitTrackerSquare}
        handleClick={props.handleClick}
        status={props.status}
        disabledTracker={props.disabledTracker}
      />
    )
  );

  return (
    <div className="Habit" style={{ borderColor: props.streak(props.habit) }}>
      <div style={{ flex: 5 }}>
        <h1>{props.habit.habitName}</h1>
        <h3>{props.habit.habitStart}</h3>
        <p>{props.habit.id}</p>
        <div className="HabitTable">{HabitTrackerTable}</div>
      </div>
      <button
        style={{ alignSelf: "flex-start" }}
        onClick={() => {
          props.handleRemove(props.habit.id);
        }}
      >
        X
      </button>
    </div>
  );
};
