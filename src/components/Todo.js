import { useState } from 'react';
import './Todo.css';

function Todo({ title }) {
  const [checked, setChecked] = useState(false);
  console.log(checked);
  return (
    <div className={`todo${checked ? ' todo-checked' : ''}`}>
      {title}{' '}
      <input
        type="checkbox"
        onChange={() => {
          setChecked(!checked);
        }}
      />
    </div>
  );
}

export default Todo;
