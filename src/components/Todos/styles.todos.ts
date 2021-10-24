import styled from 'styled-components';

export const Wrapper = styled.div`
  text-align: center;
  width: 100%;
  margin: 5rem auto;

   @media (max-width: 768px) {
    margin:5rem 0px;
    padding:0px 30px;
  }


  & form > input[type='text'] {
    width: 100%;
    max-width: 768px;
    padding: 1rem;
    border-radius: 12px;
    font-family: 'Nunito';
    background-color: inherit;
    color: inherit;
    border: none;
    font-size: 18px;
    border: 1px solid darkgrey;

    &:focus {
      outline: none;
    }

    @media (max-width: 768px) {
      max-width: 200px;
    }
  }

  .todos-container {
    width: 100%;
    height: 500px;

    & .empty-list-header {
      margin-top:2rem;
      font-size:1.5rem;
    }
  }
`;
