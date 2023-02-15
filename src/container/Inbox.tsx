import { useState } from 'react';
import { tokens, useMode } from '@/theme/theme';
import { Paper, Stack } from '@mui/material';
import { Drawer } from '@/components/inbox/Drawer';
import SideMenu from '@/components/inbox/SideMenu';
import Chat from '@/components/inbox/chat/Chat';

export default function Inbox() {
  const [theme, colorMode] = useMode();
  const colors = tokens(theme.palette.mode);
  const [user, setUser] = useState({
    id: 1,
    name: 'Jon Snow',
    email: 'jonsnow@gmail.com',
    age: 35,
    phone: '(665)121-5454',
    waPhone: '(665)121-5454',
    access: 'admin',
  });

  const handleUserData = (data: any) => {
    console.log(data);
    setUser(data);
  };

  return (
    <Stack direction='row' spacing={2}>
      <Paper
        sx={{
          width: '80%',
          height: '803px',
          mb: 2,
          borderRadius: '10px',
          backgroundColor: colors.primary[400],
          backgroundImage: 'none',
          border: '1px solid #000',
          borderColor: 'divider',
          display: 'flex',
        }}
      >
        <SideMenu />
        <Chat onUserReceived={handleUserData} />
      </Paper>

      <Drawer user={user} />
    </Stack>
  );
}
