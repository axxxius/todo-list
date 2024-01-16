import { Header, Panel, TodoList } from './components';
import cl from './App.module.css';
import { Box } from '@mui/material';
import { useState } from 'react';

export type TTodoList = {
  id: number;
  name: string;
  description: string;
  checked: boolean;
};

const App = () => {
  const [todoList, setTodoList] = useState([
    { id: 1, name: 'привет', description: 'why dolphin in my pc', checked: false },
    { id: 2, name: 'пока', description: 'вапкеапапввава', checked: false },
    { id: 3, name: 'зачем', description: 'ваовоаллва', checked: true }
  ]);

  const onDeleteTodo = (id: TTodoList['id']) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  return (
    <div className={cl.app}>
      <Box display='flex' flexDirection='column' width={500}>
        <Header />
        <Panel />
        <TodoList todoList={todoList} onDeleteTodo={onDeleteTodo} />
      </Box>
    </div>
  );
};

export default App;
