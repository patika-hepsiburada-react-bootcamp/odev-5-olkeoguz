import Header from './components/Header/Header';
import GlobalStyles from './globalStyles/global-styles';
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import { DarkTheme, BaseTheme, Container } from './globalStyles/styles.app';
import Todos from './components/Todos/Todos';

const App: React.FC = () => {
  const [isDarkTheme, setIsDarkTheme] = useState<Boolean>(true);

  return (
    <ThemeProvider theme={isDarkTheme ? DarkTheme : BaseTheme}>
      <GlobalStyles />
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
