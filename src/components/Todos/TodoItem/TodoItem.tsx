import { TodoType } from '../Todos';
import { Item, TodoText } from './styles.todoItem';
import { motion } from 'framer-motion';

import Delete from '../../../assets/icons/delete_outline_black_24dp.svg';

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
  hover: {
    scale: 1.05,
    transition:{
      duration:0.2,
    }
  },
};

interface IProps {
  todo: TodoType;
  changeTodo: () => void;
  deleteTodo: (todoId: String) => void;
}

const TodoItem: React.FC<IProps> = ({ todo, changeTodo, deleteTodo }) => {
  return (
    <motion.div
      variants={animateTodo}
      initial='hidden'
      animate='visible'
      whileHover='hover'
    >
      <Item>
        <label>
          <input
            type='checkbox'
            checked={!!todo.isDone}
            onChange={changeTodo}
          />
          <TodoText isDone={!!todo.isDone}>{todo.text}</TodoText>
        </label>
        <img
          src={Delete}
          alt='trash'
          width={32}
          onClick={() => deleteTodo(todo.id)}
        />
      </Item>
    </motion.div>
  );
};

export default TodoItem;
