export const SubmitButton = (props) => {
  return (
    <button type="submit" disabled={props.inputEmpty}>
      Create Habit
    </button>
  );
};
