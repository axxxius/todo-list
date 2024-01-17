import { Box } from '@mui/material';
import { TodoItem } from './todoItem/todoItem.tsx';
import { FC } from 'react';
import type { TTodoList } from '../../App.tsx';
import { EditTodoItem } from './editTodoItem/editTodoItem.tsx';

type TodoListProps = {
  todoList: TTodoList[];
  onDeleteTodo: (id: TTodoList['id']) => void;
  onCheckedTodo: (id: TTodoList['id']) => void;
  onEdit: (id: TTodoList['id']) => void;
  editTodoId: TTodoList['id'];
};

export const TodoList: FC<TodoListProps> = ({ todoList, onDeleteTodo, onCheckedTodo, onEdit ,editTodoId}) => (
  <Box>
    {todoList.map((todo) => {
      if (todo.id === editTodoId) {
        return (
          <EditTodoItem
            key={todo.id}
            todo={todo}
            onCheckedTodo={onCheckedTodo}
            onEdit={onEdit}
          />
        )
      }
    }
    return (
      <TodoItem
        key={todo.id}
        todo={todo}
        onDeleteTodo={onDeleteTodo}
        onCheckedTodo={onCheckedTodo}
        onEdit={onEdit}
      />
    ))}
  </Box>
);
