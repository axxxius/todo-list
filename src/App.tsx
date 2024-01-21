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
  const [editTodoId, setEditTodoId] = useState<number | null>(null);
  const [todoList, setTodoList] = useState([
    { id: 1, name: 'привет', description: 'why dolphin in my pc', checked: false },
    { id: 2, name: 'пока', description: 'вапкеапапввава', checked: false },
    { id: 3, name: 'зачем', description: 'ваовоаллва', checked: false }
  ]);

  const onEdit = (id: TTodoList['id']) => {
    setEditTodoId(id);
  };

  const onDeleteTodo = (id: TTodoList['id']) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
    console.log('After Deletion:', todoList);
  };

  const onAddTodo = ({ name, description }: Omit<TTodoList, 'id' | 'checked'>) => {
    setTodoList([
      ...todoList,
      { id: todoList[todoList.length - 1].id + 1, description, name, checked: false }
    ]);
  };

  const onCheckedTodo = (id: TTodoList['id']) => {
    setTodoList(
      todoList.map((todo) => {
        if (todo.id === id) {
          return { ...todo, checked: !todo.checked };
        }
        return todo;
      })
    );
  };

  const onChangeTodo = ({ name, description }: Omit<TTodoList, 'id' | 'checked'>) => {
    setTodoList(
      todoList.map((todo) => {
        if (todo.id === editTodoId) {
          return { ...todo, name, description };
        }

        return todo;
      })
    );
    setEditTodoId(null);
  };

  return (
    <div className={cl.app}>
      <Box display='flex' flexDirection='column' width={500}>
        <Header />
        <Panel onAddTodo={onAddTodo} />
        <TodoList
          editTodoId={editTodoId}
          todoList={todoList}
          onChangeTodo={onChangeTodo}
          onDeleteTodo={onDeleteTodo}
          onCheckedTodo={onCheckedTodo}
          onEdit={onEdit}
        />
      </Box>
    </div>
  );
};

export default App;
