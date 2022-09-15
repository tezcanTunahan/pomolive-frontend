export default function Input({
  name,
  type,
  value,
  labelText,
  style,
  showContent,
  required,
  ...rest
}) {
  return (
    <input
      className='input'
      value={value}
      type={type}
      id={name}
      name={name}
      required={required}
      {...rest}
    />
  );
}
