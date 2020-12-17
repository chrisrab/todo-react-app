import './Todo.css';

function Todo({ title }) {
  return (
    <div className="todo">
      {title} <input type="checkbox" />
    </div>
  );
}

export default Todo;
