import { Box } from '@mui/material';
import { TodoItem } from './todoItem/todoItem.tsx';
import { FC } from 'react';
import { EditTodoItem } from './editTodoItem/editTodoItem.tsx';
import { useTodo } from '../../utils';

export const TodoList: FC = () => {
  const { todoList, editTodoId, onChangeTodo, onDeleteTodo, onCheckedTodo, onEdit } = useTodo();
  return (
    <Box>
      {todoList.map((todo) => {
        if (todo.id === editTodoId)
          return <EditTodoItem key={todo.id} todo={todo} onChangeTodo={onChangeTodo} />;

        return (
          <TodoItem
            todoList={todo}
            key={todo.id}
            onDeleteTodo={onDeleteTodo}
            onCheckedTodo={onCheckedTodo}
            onEdit={onEdit}
          />
        );
      })}
    </Box>
  );
};
