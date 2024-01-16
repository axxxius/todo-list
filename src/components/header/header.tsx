import { Box, Typography } from '@mui/material';

export const Header = () => {
  return (
    <Box textAlign='left'>
      <Typography sx={{ fontSize: 30 }} variant='h1' component='h1'>
        Todo list
      </Typography>
    </Box>
  );
};
