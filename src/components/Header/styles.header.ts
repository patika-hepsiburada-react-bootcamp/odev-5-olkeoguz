import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding-left: 20px;

  & h1 {
    font-size: 32px;
    margin-left: 20px;
  }

  .mode {
    margin-left: auto;
    margin-right: 2rem;
    cursor: pointer;
  }
`;
