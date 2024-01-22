import { useContext } from 'react';
import { TodoContext } from './todoContext.ts';

export const useTodo = () => useContext(TodoContext);
