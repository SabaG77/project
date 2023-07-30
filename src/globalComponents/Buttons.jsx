export const Buttons = (props) => {
  const { click, name, type } = props;
  return (
    <button className="btn" type={type} onClick={click}>
      {name}
    </button>
  );
};
