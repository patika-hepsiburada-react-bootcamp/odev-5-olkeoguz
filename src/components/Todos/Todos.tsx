import React, { useMemo, useState } from 'react';
import StatusBar from '../StatusBar/StatusBar';
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
    { id: randomIdGenerator(), isDone: true, text: 'Finish your 5. homework' },
    { id: randomIdGenerator(), isDone: false, text: 'Take your dog out' },
  ]);

  const [newTodo, setNewTodo] = useState<String>('');
  const [todoFilter, setTodoFilter] = useState<String>('all');

  const addNewTodo: (e: React.FormEvent<HTMLFormElement>) => void = (e) => {
    e.preventDefault();
    if (newTodo.length) {
      setTodos((prev) => [
        ...prev,
        { isDone: false, id: randomIdGenerator(), text: newTodo },
      ]);
      setNewTodo('');
    }
  };

  const toggleTodo: (todoId: String) => void = (todoId) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === todoId ? { ...todo, isDone: !todo.isDone } : { ...todo }
    );
    setTodos(updatedTodos);
  };

  const deleteTodo: (todoId: String) => void = (todoId) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== todoId));
  };

  const todosToShow = useMemo(() => {
    if (todoFilter === 'active') {
      return todos.filter((todo) => !todo.isDone);
    } else if (todoFilter === 'completed') {
      return todos.filter((todo) => todo.isDone);
    } else {
      return [...todos];
    }
  }, [todos, todoFilter]);

  return (
    <Wrapper>
      <StatusBar todoFilter={todoFilter} setTodoFilter={setTodoFilter} />
      <form onSubmit={addNewTodo}>
        <input
          type='text'
          placeholder='Enter your new todo'
          value={newTodo.toString()}
          onChange={(e) => setNewTodo(e.target.value)}
          autoFocus
        />
      </form>
      <div className='todos-container'>
        {!todosToShow.length && todoFilter === 'all' && (
          <h3 className="empty-list-header"> So,you have nothing to do? </h3>
        )}
        {todosToShow.map((todo) => (
          <TodoItem
            todo={todo}
            key={todo.id.toString()}
            changeTodo={() => toggleTodo(todo.id)}
            deleteTodo={deleteTodo}
          />
        ))}
      </div>
    </Wrapper>
  );
};

export default Todos;
