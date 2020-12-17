import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div>Count is: {count}</div>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setCount('Chris');
        }}
      >
        chris button
      </button>
    </div>
  );
}

export default Counter;
