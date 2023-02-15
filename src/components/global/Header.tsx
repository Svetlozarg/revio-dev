import { Typography, Box, useTheme } from '@mui/material';
import { tokens } from '@/theme/theme';

interface Props {
  title: any;
  subtitle?: any;
}

export const Header: React.FC<Props> = ({ title, subtitle = '' }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box mb='30px'>
      <Typography
        variant='h1'
        color={colors.grey[100]}
        fontWeight='bold'
        sx={{ m: '0 0 5px 0' }}
        style={{
          fontSize: '2rem',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          gap: '0.5rem',
        }}
      >
        {title}
      </Typography>
      <Typography variant='h5' color={colors.greenAccent[400]}>
        {subtitle}
      </Typography>
    </Box>
  );
};
