import { useState } from 'react';
import './App.css';
import Input from './components/Input';
import Todo from './components/Todo';
import Filters from './components/Filters';

function App() {
  const [todoValue, setTodoValue] = useState('');
  const [todos, setTodos] = useState([]);
  return (
    <div
      className="App"
      onKeyPress={(event) => {
        if (event.code === 'Enter') {
          const newTodos = todos.concat(todoValue);
          setTodos(newTodos);
          setTodoValue('');
        }
      }}
    >
      <Input
        inputValue={todoValue}
        onChange={(newTodoValue) => {
          setTodoValue(newTodoValue);
        }}
      />

      <div>
        {todos.map((todo) => {
          return <Todo title={todo} />;
        })}
      </div>

      <Filters />
    </div>
  );
}

export default App;
