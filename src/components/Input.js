import './Input.css';

function Input({ onChange, inputValue }) {
  return (
    <div className="Input-container">
      <label>add-todo</label>
      <input
        value={inputValue}
        className="Input"
        onChange={(event) => {
          onChange(event.target.value);
        }}
      />
    </div>
  );
}

export default Input;
