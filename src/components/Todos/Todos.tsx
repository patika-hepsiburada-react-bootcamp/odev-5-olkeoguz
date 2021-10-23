import React, { useState } from 'react';
import { Wrapper } from './styles.todos';
import TodoItem from './TodoItem/TodoItem';

export type TodoType = {
  id: String;
  isDone: Boolean;
  text: String;
};

const randomIdGenerator: () => String = () =>
  Math.random().toString(36).slice(2);

const Todos = () => {
  const [todos, setTodos] = useState<TodoType[]>([
    { id: randomIdGenerator(), isDone: false, text: 'Finish your 5. homework' },
    { id: randomIdGenerator(), isDone: true, text: 'Take your dog out' },
  ]);

  const [newTodo, setNewTodo] = useState<String>('');
  const addNewTodo: (e: React.FormEvent<HTMLFormElement>) => void = (e) => {
    e.preventDefault();
    if (newTodo.length) {
      setTodos((prev) => [
        ...prev,
        { isDone: false, id: randomIdGenerator(), text: newTodo },
      ]);
      setNewTodo("");
    }
  };

  const toggleTodo: (todoId: String) => void = (todoId) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === todoId ? { ...todo, isDone: !todo.isDone } : { ...todo }
    );
    setTodos(updatedTodos);
  };

  return (
    <Wrapper>
      <form onSubmit={addNewTodo}>
        <input
          type='text'
          placeholder='Enter your new todo'
          value={newTodo.toString()}
          onChange={(e) => setNewTodo(e.target.value)}
          autoFocus
        />
      </form>
      <div className="todos-container">
        {todos.map((todo) => (
          <TodoItem
            todo={todo}
            key={todo.id.toString()}
            changeTodo={() => toggleTodo(todo.id)}
          />
        ))}
      </div>
    </Wrapper>
  );
};

export default Todos;
