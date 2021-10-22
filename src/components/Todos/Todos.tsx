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
    { id: randomIdGenerator(), isDone: false, text: 'My first Todo' },
    { id: randomIdGenerator(), isDone: true, text: 'My second Todo' },
  ]);

  const [newTodo, setNewTodo] = useState<String>('');
  const addNewTodo: () => void = () => {
    setTodos((prev) => [
      ...prev,
      { isDone: false, id: randomIdGenerator(), text: newTodo },
    ]);
  };

  const toggleTodo: (todoId: String) => void = (todoId) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === todoId ? { ...todo, isDone: !todo.isDone } : { ...todo }
    );
    setTodos(updatedTodos);
  };

  return (
    <Wrapper>
      <div>
        {todos.map((todo) => (
          <TodoItem
            todo={todo}
            key={todo.id.toString()}
            changeTodo={() => toggleTodo(todo.id)}
          />
        ))}
      </div>
      <div>
        <input
          type='text'
          placeholder='add new todo'
          value={newTodo.toString()}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={addNewTodo}>Submit</button>
      </div>
    </Wrapper>
  );
};

export default Todos;
