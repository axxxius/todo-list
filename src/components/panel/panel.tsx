import { TextField, Paper, Button } from '@mui/material';
import { ChangeEvent, FC, useState } from 'react';
import { Add } from '@mui/icons-material';
import { TTodoList } from '../../App.tsx';

type TPanelProps = {
  onAddTodo: ({ name, description }: Omit<TTodoList, 'id' | 'checked'>) => void;
};

const TODO = { name: '', description: '' };
export const Panel: FC<TPanelProps> = ({ onAddTodo }) => {
  const [todo, setTodo] = useState(TODO);

  const onClick = () => {
    console.log('@', todo);
    onAddTodo(todo);
    setTodo(TODO);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    console.log('@@@', name, value);
    setTodo({ ...todo, [name]: value });
  };

  return (
    <Paper
      elevation={3}
      sx={{
        width: '100%',
        padding: '25px 30px',
        borderRadius: 2,
        display: 'flex',
        justifyContent: 'space-between',
        alignContent: 'center',
        gap: 2
      }}
    >
      <TextField value={todo.name} name='name' label='name' onChange={onChange} />
      <TextField
        value={todo.description}
        name='description'
        label='description'
        onChange={onChange}
      />

      <Button startIcon={<Add />} variant='outlined' onClick={onClick}>
        Add
      </Button>
    </Paper>
  );
};
