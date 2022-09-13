function Button({ type, text, onClick, style, className }) {
  return (
    <button className={`button ${className}`} type={type} onClick={onClick} style={style}>
      {text}
    </button>
  );
}

export default Button;
