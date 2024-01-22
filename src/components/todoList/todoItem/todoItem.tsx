import { Box, IconButton, Paper, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { FC } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import { TTodoList } from '../../../utils';

type TodoItemProps = {
  todoList: TTodoList;
  onDeleteTodo: (id: TTodoList['id']) => void;
  onCheckedTodo: (id: TTodoList['id']) => void;
  onEdit: (id: TTodoList['id']) => void;
};

export const TodoItem: FC<TodoItemProps> = ({ todoList, onDeleteTodo, onCheckedTodo, onEdit }) => {
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
        gap: 2,
        opacity: todoList.checked ? 0.3 : 1
      }}
    >
      <Box textAlign='left'>
        <Typography
          onClick={() => onCheckedTodo(todoList.id)}
          sx={{ cursor: 'pointer', textDecorationLine: todoList.checked ? 'line-through' : 'none' }}
          variant='h4'
          component='h4'
        >
          {todoList.name}
        </Typography>
        <Typography variant='subtitle1' component='div'>
          {todoList.description}
        </Typography>
      </Box>
      <Box width='70px' display='flex' gap='2px'>
        <IconButton onClick={() => onDeleteTodo(todoList.id)} color='error' aria-label='delete'>
          <DeleteIcon />
        </IconButton>
        <IconButton onClick={() => onEdit(todoList.id)} color='primary' aria-label='edit'>
          <EditIcon />
        </IconButton>
      </Box>
    </Paper>
  );
};
