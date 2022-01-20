export const TextInput = (props) => {
  return (
    <input
      className="inputText"
      type="text"
      value={props.habitInput}
      onChange={props.handleChange}
      maxLength={100}
      placeholder="Enter Habit"
    ></input>
  );
};
