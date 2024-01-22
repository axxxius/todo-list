import { Header, Panel, TodoList } from './components';
import cl from './App.module.css';
import { Box, createTheme, ThemeProvider } from '@mui/material';
import { TodoProvider } from './utils';

const App = () => {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark'
    }
  });

  return (
    <TodoProvider>
      <div className={cl.app}>
        <ThemeProvider theme={darkTheme}>
          <Box display='flex' flexDirection='column' width={500}>
            <Header />
            <Panel />
            <TodoList />
          </Box>
        </ThemeProvider>
      </div>
    </TodoProvider>
  );
};

export default App;
