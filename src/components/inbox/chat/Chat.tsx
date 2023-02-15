import { useState } from 'react';
import {
  Tabs,
  Avatar,
  Tab,
  Box,
  Select,
  FormControl,
  MenuItem,
  IconButton,
} from '@mui/material';
import ChatRoom from './ChatRoom';
import ChatTab from './ChatTab';
import { tokens, useMode } from '@/theme/theme';
import { mockDataTeam } from '@/data/mockData';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

interface Props {
  onUserReceived: any;
}

export default function Chat(props: Props) {
  const { onUserReceived } = props;
  const [theme, colorMode] = useMode();
  const colors = tokens(theme.palette.mode);
  const [value, setValue] = useState(1);
  const [chatCategorie, setChatCategorie] = useState(1);
  const [ticketsFilter, setTicketsFilter] = useState('open');

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeFilter = (event: any) => {
    setTicketsFilter(event.target.value);
  };

  return (
    <Box
      sx={{
        width: '100%',
        flexGrow: 1,
        backgroundColor: colors.primary[400],
        display: 'flex',
        height: '100%',
        borderRadius: '0 10px 10px 0',
      }}
    >
      {/* Chat Tabs */}
      <Tabs
        orientation='vertical'
        variant='scrollable'
        value={value}
        onChange={handleChange}
        aria-label='Chat Tabs'
        sx={{
          width: '420px',
          borderRight: 1,
          borderRadius: '0 10px 10px 0',
          borderColor: 'divider',
        }}
      >
        {/* Chat Tabs Header */}
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '.5rem 1rem',
          }}
        >
          <FormControl sx={{ m: 1, minWidth: 120 }} size='small'>
            <Select
              labelId='demo-select-small'
              id='demo-select-small'
              value={ticketsFilter}
              onChange={handleChangeFilter}
            >
              <MenuItem value='open'>Open</MenuItem>
              <MenuItem value='closed'>Closed</MenuItem>
            </Select>
          </FormControl>

          <IconButton>
            <FilterAltIcon sx={{ fontSize: '1.8rem' }} />
          </IconButton>
        </Box>

        {mockDataTeam.map((user, i) => {
          return (
            <Tab
              key={i}
              label={<ChatTab index={i + 1} value={value} user={user} />}
              {...a11yProps(0)}
              icon={<Avatar />}
              iconPosition='start'
              sx={{
                backgroundColor:
                  value === i + 1 && theme.palette.mode === 'dark'
                    ? '#2a3942'
                    : value === i + 1 && theme.palette.mode === 'light'
                    ? '#f0f2f5'
                    : '',
                width: '85%',
                margin: '0 auto',
                justifyContent: 'start',
                minHeight: '55px',
                fontSize: '1.5rem',
                fontWeight: '600',
                borderRadius: value === i + 1 ? '10px' : '0px',
                color: theme.palette.mode === 'dark' ? '#fff' : '#000',
              }}
              onClick={() => {
                onUserReceived(user);
              }}
            />
          );
        })}
      </Tabs>

      {/* Chat Rooms */}
      {mockDataTeam.map((user, i) => {
        return <ChatRoom key={i} value={value} index={i + 1} user={user} />;
      })}
    </Box>
  );
}
