import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { addTodo, toggleTodo, deleteTodo } from '../store/todoSlice';
import { PlusCircle, Trash2, CheckCircle, Circle } from 'lucide-react';

const TodoList: React.FC = () => {
  const [newTodo, setNewTodo] = useState('');
  const todos = useSelector((state: RootState) => state.todos.todos);
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTodo.trim()) {
      dispatch(addTodo(newTodo.trim()));
      setNewTodo('');
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Task Manager</h1>
      
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="flex gap-2">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add a new task..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 flex items-center gap-2"
          >
            <PlusCircle size={20} />
            Add Task
          </button>
        </div>
      </form>

      <div className="space-y-4">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="flex items-center justify-between p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-3">
              <button
                onClick={() => dispatch(toggleTodo(todo.id))}
                className="text-gray-500 hover:text-blue-500"
              >
                {todo.completed ? (
                  <CheckCircle className="text-green-500" size={24} />
                ) : (
                  <Circle size={24} />
                )}
              </button>
              <span className={`${todo.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
                {todo.text}
              </span>
            </div>
            <button
              onClick={() => dispatch(deleteTodo(todo.id))}
              className="text-red-500 hover:text-red-600"
            >
              <Trash2 size={20} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoList;