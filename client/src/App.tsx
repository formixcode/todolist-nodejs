import { useEffect, useState } from "react";
import axios from "axios";

const API = "http://localhost:5000/api/todos"; // change in prod

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  const fetchTodos = async () => {
    const res = await axios.get(API);
    setTodos(res.data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const addTodo = async () => {
    if (!text) return;
    const res = await axios.post(API, { text });
    setTodos([...todos, res.data]);
    setText("");
  };

  const toggleComplete = async (todo) => {
    const res = await axios.put(`${API}/${todo._id}`, { completed: !todo.completed });
    setTodos(todos.map(t => t._id === res.data._id ? res.data : t));
  };

  const deleteTodo = async (id) => {
    await axios.delete(`${API}/${id}`);
    setTodos(todos.filter(t => t._id !== id));
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl mb-4">📝 Fullstack Todo</h1>
      <div className="flex mb-4">
        <input value={text} onChange={(e) => setText(e.target.value)} className="flex-1 border p-2" />
        <button onClick={addTodo} className="ml-2 bg-blue-500 text-white px-4">Add</button>
      </div>
      <ul>
        {todos.map(todo => (
          <li key={todo._id} className="flex justify-between p-2 border-b">
            <span onClick={() => toggleComplete(todo)} className={todo.completed ? "line-through" : ""}>
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo._id)} className="text-red-500">X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
