import {
  Box,
  Button,
  FormControl,
  IconButton,
  Select,
  Stack,
  Typography,
  MenuItem,
} from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import { tokens, useMode } from '@/theme/theme';
import { useState } from 'react';

interface Props {
  user: any;
}

export default function ChatHeader(props: Props) {
  const { user } = props;
  const [theme, colorMode] = useMode();
  const colors = tokens(theme.palette.mode);
  const [ticket, setTicket] = useState('unassigned');
  const [aiActive, setAiActive] = useState(false);

  const handleChange = (event: any) => {
    setTicket(event.target.value);
  };

  return (
    <Stack
      direction='row'
      justifyContent='space-between'
      alignItems='center'
      spacing={0}
      sx={{
        width: '100%',
        height: '80px',
        borderRadius: '0 0 0 10px',
        borderBottom: '1px solid',
        borderColor: 'divider',
        padding: '1rem',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '.5rem',
        }}
      >
        <WhatsAppIcon sx={{ fontSize: '2.5rem' }} />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
          }}
        >
          <Typography fontSize='1rem' fontWeight='bold'>
            {user.name}
          </Typography>
          <Typography fontSize='1rem'>{user.phone}</Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          gap: '.5rem',
        }}
      >
        <IconButton onClick={() => setAiActive(!aiActive)}>
          <SmartToyIcon
            sx={{
              fontSize: '2rem',
              color: aiActive ? colors.blueAccent[400] : '#fff',
            }}
          />
        </IconButton>
        <Box sx={{ minWidth: 120 }}>
          <FormControl sx={{ m: 1, minWidth: 120 }} size='small'>
            <Select
              labelId='demo-select-small'
              id='demo-select-small'
              value={ticket}
              onChange={handleChange}
            >
              <MenuItem value='unassigned'>Unassigned</MenuItem>
              <MenuItem value='assigned'>Assigned</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Button
          sx={{
            backgroundColor: colors.blueAccent[700],
            color: colors.grey[100],
            fontSize: '14px',
            fontWeight: 'bold',
            padding: '5px 20px',
            borderRadius: '10px',
            textTransform: 'none',
          }}
        >
          Close
        </Button>
      </Box>
    </Stack>
  );
}
