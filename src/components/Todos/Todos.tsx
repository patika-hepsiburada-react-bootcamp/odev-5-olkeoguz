import React, { useState } from 'react';
import { Wrapper } from './styles.todos';
import TodoItem from './TodoItem/TodoItem';

export type TodoType = {
  id: number;
  isDone: boolean;
  text: string;
};

const Todos = () => {
  const [todos, setTodos] = useState<TodoType[]>([
    { id: 1, isDone: false, text: 'My first Todo' },
    { id: 2, isDone: true, text: 'My second Todo' },
  ]);
  return (
    <Wrapper>
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </Wrapper>
  );
};

export default Todos;
