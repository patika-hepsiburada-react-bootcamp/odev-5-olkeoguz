import styled, { css } from 'styled-components/macro';

export const Item = styled.div`
  background: #20212c;
  margin: 20px auto;
  max-width: 768px;
  padding: 16px 16px 16px 0px;
  border-radius: 1rem;
  color: #fff;
  transition: all 0.3s ease-out;
  display: flex;
  align-items: center;
  ${({ theme }) =>
    theme.name === 'DarkTheme'
      ? css`
          box-shadow: 0px 3px 12px 2px rgba(234, 223, 223, 0.54);
          -webkit-box-shadow: 2px 3px 8px 0px rgba(234, 223, 223, 0.54);
          -moz-box-shadow: 0px 3px 12px 2px rgba(234, 223, 223, 0.54);
        `
      : css`
          box-shadow: 0px 3px 12px 2px rgba(0, 0, 0, 0.54);
          -webkit-box-shadow: 0px 3px 12px 2px rgba(0, 0, 0, 0.54);
          -moz-box-shadow: 0px 3px 12px 2px rgba(0, 0, 0, 0.54);
        `}

  @media(max-width: 768px) {
    margin: 1rem auto;
  }

  &:hover {
    padding: 16px 20px;
  }

  & label {
    padding: 0px 16px;
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  & img {
    margin-left: auto;
    cursor: pointer;
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

  ${({ isDone }) =>
    isDone &&
    css`
      text-decoration: line-through;
      color: #006400;
    `}

  @media(max-width: 768px) {
    font-size: 1rem;
  }
`;
