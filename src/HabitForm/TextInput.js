export const TextInput = (props) => {
  return (
    <input
      className="inputText"
      type="text"
      value={props.habitInput}
      onChange={props.handleChange}
      placeholder="Enter Habit"
    ></input>
  );
};
