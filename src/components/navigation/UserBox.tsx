import { tokens } from '@/theme/theme';
import { Box, Typography, useTheme } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Button from '../global/Button';

export default function UserBox() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box mb='25px'>
      <Box display='flex' justifyContent='center' alignItems='center'>
        <AccountCircleIcon style={{ fontSize: '6rem' }} />
      </Box>
      <Box textAlign='center'>
        <Typography
          variant='h2'
          color={colors.grey[100]}
          fontWeight='bold'
          sx={{ m: '10px 0 0 0', fontSize: '1.5rem' }}
        >
          revio-demo
        </Typography>
        <Typography variant='h5' color={colors.greenAccent[500]} mb={1}>
          revio-demo@revio.com
        </Typography>
        <Button text='Logout' padding='5px 20px' />
      </Box>
    </Box>
  );
}
