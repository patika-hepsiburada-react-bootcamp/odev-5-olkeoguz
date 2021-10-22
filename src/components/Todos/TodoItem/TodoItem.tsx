import { TodoType } from '../Todos';
import { Item, TodoText } from './styles.todoItem';

interface IProps {
  todo: TodoType;
  changeTodo: () => void;
}

const TodoItem: React.FC<IProps> = ({ todo, changeTodo }) => {
  return (
    <Item>
      <label>
        <input type='checkbox' checked={!!todo.isDone} onChange={changeTodo} />
        <TodoText isDone={!!todo.isDone}>{todo.text}</TodoText>
      </label>
    </Item>
  );
};

export default TodoItem;
