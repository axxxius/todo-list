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
  editTodoId: TTodoList['id'] | null;
  onChangeTodo: ({ name, description }: Omit<TTodoList, 'id' | 'checked'>) => void;
};

export const TodoList: FC<TodoListProps> = ({
  editTodoId,
  todoList,
  onDeleteTodo,
  onCheckedTodo,
  onEdit,
  onChangeTodo
}) => (
  <Box>
    {todoList.map((todo) => {
      if (todo.id === editTodoId)
        return <EditTodoItem key={todo.id} todo={todo} onChangeTodo={onChangeTodo} />;

      return (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDeleteTodo={onDeleteTodo}
          onCheckedTodo={onCheckedTodo}
          onEdit={onEdit}
        />
      );
    })}
  </Box>
);
