import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding:8px 0px 0px 20px;

  & h1 {
    font-size: 32px;
    margin-left: 20px;
  }

  .mode {
    margin-left: auto;
    margin-right: 2rem;
    cursor: pointer;
  }

  @media(max-width: 768px) {
   .logo{
     display: none;
   }

   h1 {
     font-size:24px;
   }
  }
`;
