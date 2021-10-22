import { TodoType } from '../Todos';
import { Item } from './styles.todoItem';

interface IProps {
  todo: TodoType;
}

const TodoItem: React.FC<IProps> = ({ todo }) => {
  return (
    <Item>
      <label>
        <input type='radio' />
        <span>{todo.text}</span>
      </label>
    </Item>
  );
};

export default TodoItem;
