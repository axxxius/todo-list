import { Box, IconButton, Paper, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { FC } from 'react';
import { TTodoList } from '../../../App.tsx';
import EditIcon from '@mui/icons-material/Edit';

type TodoItemProps = {
  todo: TTodoList;
  onDeleteTodo: (id: TTodoList['id']) => void;
  onCheckedTodo: (id: TTodoList['id']) => void;
  onEdit: (id: TTodoList['id']) => void;
};

export const TodoItem: FC<TodoItemProps> = ({ todo, onDeleteTodo, onCheckedTodo, onEdit }) => (
  <Paper
    elevation={3}
    sx={{
      marginTop: '15px',
      width: '100%',
      padding: '20px 30px',
      borderRadius: 2,
      display: 'flex',
      justifyContent: 'space-between',
      alignContent: 'center',
      gap: 2,
      opacity: todo.checked ? 0.5 : 1
    }}
  >
    <Box textAlign='left'>
      <Typography
        onClick={() => onCheckedTodo(todo.id)}
        sx={{ cursor: 'pointer', textDecorationLine: todo.checked ? 'line-through' : 'none' }}
        variant='h4'
        component='h4'
      >
        {todo.name}
      </Typography>
      <Typography variant='subtitle1' component='div'>
        {todo.description}
      </Typography>
    </Box>
    <Box width='70px' display='flex' gap='2px'>
      <IconButton onClick={() => onDeleteTodo(todo.id)} color='error' aria-label='delete'>
        <DeleteIcon />
      </IconButton>
      <IconButton onClick={() => onEdit(todo.id)} color='primary' aria-label='edit'>
        <EditIcon />
      </IconButton>
    </Box>
  </Paper>
);
