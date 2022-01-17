export const HabitForm = (props) => {
  return <form onSubmit={props.clickSubmit}>{props.children}</form>;
};
