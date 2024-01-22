import { createContext } from 'react';
import { TTodoList } from './todoProvider.tsx';

export type TodoContextProps = {
  todoList: TTodoList[];
  editTodoId: TTodoList['id'] | null;
  onDeleteTodo: (id: TTodoList['id']) => void;
  onCheckedTodo: (id: TTodoList['id']) => void;
  onEdit: (id: TTodoList['id']) => void;
  onChangeTodo: ({ name, description }: Omit<TTodoList, 'id' | 'checked'>) => void;
  onAddTodo: ({ name, description }: Omit<TTodoList, 'id' | 'checked'>) => void;
};

export const TodoContext = createContext<TodoContextProps>({
  todoList: [],
  editTodoId: null,
  onDeleteTodo: () => {},
  onCheckedTodo: () => {},
  onEdit: () => {},
  onChangeTodo: () => {},
  onAddTodo: () => {}
});
