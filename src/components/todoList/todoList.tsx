import { Box } from '@mui/material';
import { TodoItem } from './todoItem/todoItem.tsx';
import { FC } from 'react';
import type { TTodoList } from '../../App.tsx';

type TodoListProps = {
  todoList: TTodoList[];
  onDeleteTodo: (id: TTodoList['id']) => void;
};

export const TodoList: FC<TodoListProps> = ({ todoList, onDeleteTodo }) => (
  <Box>
    {todoList.map((todo) => (
      <TodoItem todo={todo} onDeleteTodo={onDeleteTodo} />
    ))}
  </Box>
);
