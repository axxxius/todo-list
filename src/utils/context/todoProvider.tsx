import { FC, ReactNode, useMemo, useState } from 'react';
import { TodoContext } from './todoContext.ts';

interface TodoProviderProps {
  children: ReactNode;
}

export type TTodoList = {
  id: number;
  name: string;
  description: string;
  checked: boolean;
};

const DEFAULT_TODO_LIST = [
  { id: 1, name: 'test 1', description: 'description 1', checked: false },
  { id: 2, name: 'test 2', description: 'description 2', checked: false },
  { id: 3, name: 'test 3', description: 'description 3', checked: false }
];

export const TodoProvider: FC<TodoProviderProps> = ({ children }) => {
  const [editTodoId, setEditTodoId] = useState<number | null>(null);
  const [todoList, setTodoList] = useState(DEFAULT_TODO_LIST);

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

  const value = useMemo(
    () => ({
      todoList,
      editTodoId,
      onEdit,
      onDeleteTodo,
      onAddTodo,
      onCheckedTodo,
      onChangeTodo
    }),
    [todoList, editTodoId, onEdit, onDeleteTodo, onAddTodo, onCheckedTodo, onChangeTodo]
  );

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};
