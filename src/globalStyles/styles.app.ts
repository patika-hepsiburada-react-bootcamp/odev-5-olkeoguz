import styled from 'styled-components';

export const BaseTheme = {
  name: 'BaseTheme',
  color: '#0F0F15',
  background: '#f8f8f8 ',
};

export const DarkTheme = {
  name: 'DarkTheme',
  color: '#fff',
  background: '#0F0F15',
};

export const Container = styled.div`
  color: ${({ theme }) => theme.color};
  background: ${({ theme }) => theme.background};
  min-width: 100vw;
  min-height: 100vh;
  transition: all 0.5s ease-in-out;
  overflow-x: hidden;
  overflow-y: auto;
`;
