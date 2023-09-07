export const InputDiv = (props) => {
  const { htmlFor, name, inType, inValue, inOnChange, inPlaceHolder } = props;
  return (
    <div>
      <label htmlFor={htmlFor}>{name}</label>
      <input
        type={inType}
        value={inValue}
        onChange={inOnChange}
        placeholder={inPlaceHolder}
      />
    </div>
  );
};
