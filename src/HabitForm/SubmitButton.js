export const SubmitButton = (props) => {
  return (
    <button className="submitButton" type="submit" disabled={props.inputEmpty}>
      Create Habit
    </button>
  );
};
