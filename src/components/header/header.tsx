import { Box, Typography } from '@mui/material';
import { useTodo } from '../../utils';

export const Header = () => {
  const { todoList } = useTodo();
  return (
    <Box textAlign='left'>
      <Typography sx={{ fontSize: 30 }} variant='h1' component='h1'>
        Todo list <b>{todoList.length}</b> task(s)
      </Typography>
    </Box>
  );
};
