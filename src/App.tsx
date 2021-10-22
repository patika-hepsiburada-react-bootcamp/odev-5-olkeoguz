import Header from './components/Header/Header';
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import { DarkTheme, BaseTheme, Container } from './globalStyles/styles.app';
import Todos from './components/Todos/Todos';

const App: React.FC = () => {
  const [isDarkTheme, setIsDarkTheme] = useState<Boolean>(true);

  return (
    <ThemeProvider theme={isDarkTheme ? DarkTheme : BaseTheme}>
      <div className='App'>
        <Container>
          <Header isDarkTheme={isDarkTheme} setTheme={setIsDarkTheme} />
          <Todos />
        </Container>
      </div>
    </ThemeProvider>
  );
};

export default App;
