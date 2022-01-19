export const HabitTracker = (props) => {
  return (
    <button
      onClick={() => {
        props.handleClick(props.id, props.index);
      }}
      style={{
        border: "1px solid black",
        padding: "5px",
        margin: "2px",
        cursor: "pointer",
        background: props.status(props.habitTrackerSquare),
        fontWeight: "bolder",
      }}
      disabled={props.disabledTracker(props.habitTrackerSquare)}
    >
      {props.habitTrackerSquare.date}
    </button>
  );
};
