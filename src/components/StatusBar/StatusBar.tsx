import styled from 'styled-components';

const Filters = styled.ul`
  display: flex;
  justify-content: center;

  & li {
    list-style: none;
    margin: 20px;
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: bold;

    &.active {
      text-decoration: underline;
    }
  }
`;

interface IProps {
  todoFilter: String;
  setTodoFilter: React.Dispatch<React.SetStateAction<String>>;
}

const StatusBar: React.FC<IProps> = ({ todoFilter, setTodoFilter }) => {
  return (
    <Filters>
      <li
        className={todoFilter === 'all' ? 'active' : ''}
        onClick={() => setTodoFilter('all')}
      >
        All
      </li>
      <li
        className={todoFilter === 'active' ? 'active' : ''}
        onClick={() => setTodoFilter('active')}
      >
        Active
      </li>
      <li
        className={todoFilter === 'completed' ? 'active' : ''}
        onClick={() => setTodoFilter('completed')}
      >
        Completed
      </li>
    </Filters>
  );
};

export default StatusBar;
