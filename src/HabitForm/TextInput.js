export const TextInput = (props) => {
  return (
    <input
      type="text"
      value={props.habitInput}
      onChange={props.handleChange}
      placeholder="Enter Habit"
    ></input>
  );
};
