import { Habit } from "./Habit";

export const HabitTable = (props) => {
  const HabitTable = props.HabitData.map((habit) => (
    <Habit
      habit={habit}
      status={props.status}
      handleClick={props.handleClick}
      handleRemove={props.handleRemove}
      key={habit.id}
    />
  ));
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>{HabitTable}</div>
  );
};
