function Button({ type, text, onClick, style, variant }) {
  return (
    <button className={`button ${variant}`} type={type} onClick={onClick} style={style}>
      {text}
    </button>
  );
}

export default Button;
