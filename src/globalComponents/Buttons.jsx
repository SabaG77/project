export const Buttons = (props) => {
  const { click, name, type, className } = props;
  return (
    <button className={className} type={type} onClick={click}>
      {name}
    </button>
  );
};
