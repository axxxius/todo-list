import { Button, Paper, TextField } from '@mui/material';
import { ChangeEvent, FC, useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import { TTodoList } from '../../../utils';

type EditTodoItemProps = {
  todo: TTodoList;
  onChangeTodo: ({ name, description }: Omit<TTodoList, 'id' | 'checked'>) => void;
};

export const EditTodoItem: FC<EditTodoItemProps> = ({ todo, onChangeTodo }) => {
  const [editTodo, setEditTodo] = useState({
    name: todo.name,
    description: todo.description
  });

  const onClick = () => {
    console.log('@', editTodo);
    onChangeTodo(editTodo);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setEditTodo({ ...editTodo, [name]: value });
  };

  return (
    <Paper
      elevation={10}
      sx={{
        marginTop: '15px',
        width: '100%',
        padding: '20px 30px',
        borderRadius: 2,
        display: 'flex',
        justifyContent: 'space-between',
        alignContent: 'center',
        gap: 2
      }}
    >
      <TextField value={editTodo.name} name='name' label='name' onChange={onChange} />
      <TextField
        value={editTodo.description}
        name='description'
        label='description'
        onChange={onChange}
      />

      <Button startIcon={<EditIcon />} variant='outlined' onClick={onClick}>
        Edit
      </Button>
    </Paper>
  );
};
