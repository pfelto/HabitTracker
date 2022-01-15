export const HabitForm = (props) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const today = new Date();
        const todayDay = `${today.getMonth() + 1}/${today.getDate()}`;
        console.log(`submitted on ${todayDay}`);
      }}
    >
      {props.children}
    </form>
  );
};
