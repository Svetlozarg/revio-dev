import { Box, Typography } from '@mui/material';
import ChatDialog from './chatroom/ChatDialog';

interface TabPanelProps {
  index: number;
  value: number;
  user: any;
}

export default function ChatRoom(props: TabPanelProps) {
  const { value, index, user, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
      style={{ width: '100%' }}
    >
      {value === index && (
        <Box sx={{ width: '100%', height: '100%' }}>
          <ChatDialog user={user} />
        </Box>
      )}
    </div>
  );
}
