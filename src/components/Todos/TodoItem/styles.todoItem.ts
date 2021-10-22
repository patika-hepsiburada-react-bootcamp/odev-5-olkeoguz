import styled from 'styled-components/macro';

export const Item = styled.div`
  background: #20212c;
  margin: 20px auto;
  width: 100%;
  max-width: 768px;
  padding: 16px 0px;
  border-radius: 1rem;
  color: #fff;

  & label {
    padding: 0px 16px;
    display: flex;
    align-items: center;
    cursor: pointer;

    & span {
      margin-left: 20px;
      font-size: 1.4rem;
      letter-spacing: 1px;
      text-decoration: ${(props) => {
        console.log(props);

        return props && 'underline';
      }};
    }
  }
`;

interface Props {
  isDone: boolean;
}

export const TodoText = styled.div<Props>`
  margin-left: 20px;
  font-size: 1.4rem;
  letter-spacing: 1px;
  transition: all ease 0.5s;
  text-decoration: ${({ isDone }) => isDone && 'line-through'};
`;
