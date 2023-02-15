import { useEffect, useRef } from 'react';
import { tokens, useMode } from '@/theme/theme';
import { Box } from '@mui/material';
import ChatBubble from '../../cards/ChatBubble';

export default function ChatBox() {
  const [theme, colorMode] = useMode();
  const colors = tokens(theme.palette.mode);
  const scrollBottom = useRef();

  useEffect(() => {
    if (scrollBottom.current) {
      (scrollBottom.current as any).scrollTop = (
        scrollBottom.current as any
      ).scrollHeight;
    }
  }, []);

  return (
    <Box
      className={
        theme.palette.mode === 'dark' ? 'dialog-box-dark' : 'dialog-box-light'
      }
      sx={{
        height: '0px',
        flexGrow: '1',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        overflow: 'auto',
      }}
      ref={scrollBottom}
    >
      <ChatBubble variant='start' color='white' text='Hello, how are you?' />
      <ChatBubble
        variant='end'
        color='green'
        text='Hello, I am fine thank you!'
      />
      <ChatBubble
        variant='start'
        color='white'
        text='Would you recommend me some good deals?'
      />
      <ChatBubble
        variant='end'
        color='green'
        text='Yes, here are some limited time offers!'
      />
    </Box>
  );
}
