import { TodoType } from '../Todos';
import { Item, TodoText } from './styles.todoItem';
import { motion } from 'framer-motion';

const animateTodo = {
  hidden: {
    opacity: 0,
    x: '-50',
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.2,
      stiffness: 100,
    },
  },
  exit: {
    opacity: 0,
    transition: { ease: 'easeInOut' },
  },
};

interface IProps {
  todo: TodoType;
  changeTodo: () => void;
}

const TodoItem: React.FC<IProps> = ({ todo, changeTodo }) => {
  return (
    <motion.div variants={animateTodo} initial='hidden' animate='visible'>
      <Item>
        <label>
          <input
            type='checkbox'
            checked={!!todo.isDone}
            onChange={changeTodo}
          />
          <TodoText isDone={!!todo.isDone}>{todo.text}</TodoText>
        </label>
      </Item>
    </motion.div>
  );
};

export default TodoItem;
