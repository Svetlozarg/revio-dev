import { Box, Typography } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { tokens, useMode } from '@/theme/theme';

interface ChatTab {
  index: number;
  value: number;
  user: any;
}

export default function ChatTab(props: ChatTab) {
  const { index, user, value } = props;
  const [theme, colorMode] = useMode();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          flexDirection: 'column',
        }}
      >
        <Typography
          textAlign='left'
          fontSize='1rem'
          textTransform='none'
          sx={{ color: index === value ? colors.greenAccent[500] : '#fff' }}
        >
          {user.name}
        </Typography>
        <Typography
          textAlign='left'
          sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'flex-end',
            gap: '4px',
            color: index === value ? colors.greenAccent[500] : '#fff',
          }}
        >
          {user.phone}
        </Typography>
      </Box>
      <WhatsAppIcon
        sx={{
          fontSize: '2rem',
          color: index === value ? colors.greenAccent[500] : '#fff',
        }}
      />
    </Box>
  );
}
