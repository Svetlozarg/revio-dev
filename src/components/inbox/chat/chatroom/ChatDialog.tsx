import { Stack } from '@mui/material';
import ChatAction from './ChatAction';
import ChatBox from './ChatBox';
import ChatHeader from './ChatHeader';

interface Props {
  user: any;
}

export default function ChatDialog(props: Props) {
  const { user } = props;

  return (
    <Stack
      direction='column'
      justifyContent='space-between'
      alignItems='stretch'
      spacing={0}
      sx={{
        width: '100%',
        height: '100%',
      }}
    >
      {/* Header */}
      <ChatHeader user={user} />

      {/* ChatBox */}
      <ChatBox />

      {/* ChatAction */}
      <ChatAction />
    </Stack>
  );
}
