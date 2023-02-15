import { useRef, useState } from 'react';
import {
  FormControlLabel,
  IconButton,
  Input,
  InputAdornment,
  Switch,
  Tooltip,
  Box,
  Zoom,
  ClickAwayListener,
} from '@mui/material';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import InsertCommentRoundedIcon from '@mui/icons-material/InsertCommentRounded';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ProductsModal from '../../modals/ProductsModal';
import Picker from '@emoji-mart/react';
import { tokens, useMode } from '@/theme/theme';

export default function ChatAction() {
  const [theme, colorMode] = useMode();
  const colors = tokens(theme.palette.mode);
  const [showEmoji, setShowEmoji] = useState(false);
  const message = useRef('');

  const handleSendMessage = () => {};

  const handleOnButtonSendMessage = () => {};

  // Fetch Emoji List
  const data = async () => {
    const response = await fetch(
      'https://cdn.jsdelivr.net/npm/@emoji-mart/data'
    );

    return response.json();
  };

  return (
    <Box
      sx={{
        height: '110px',
        borderTop: '1px solid',
        borderColor: 'divider',
        padding: '1rem',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}
    >
      {/* Action Bar */}
      <Box pt='5px' display='flex'>
        {/* Products Modal */}
        <ProductsModal />

        {/* Macros Modal */}
        <IconButton disabled>
          <InsertCommentRoundedIcon sx={{ fontSize: '1.5rem' }} />
        </IconButton>

        {/* Files Button  */}
        <IconButton>
          <AttachFileIcon />
        </IconButton>

        {/* Emoji Button  */}
        <IconButton onClick={() => setShowEmoji(!showEmoji)}>
          <EmojiEmotionsIcon />
        </IconButton>

        {/* Emoji Tab */}
        {showEmoji && (
          <ClickAwayListener onClickAway={() => setShowEmoji(!showEmoji)}>
            <Box sx={{ position: 'absolute', bottom: '140px' }}>
              <Picker
                data={data}
                previewPosition='none'
                theme={theme.palette.mode === 'dark' ? 'dark' : 'light'}
                onEmojiSelect={(emoji: any) => {
                  (message.current as any).value += emoji.native;
                  setShowEmoji(!showEmoji);
                  (message.current as any).focus();
                }}
              />
            </Box>
          </ClickAwayListener>
        )}
      </Box>

      {/* Send Message */}
      <Input
        placeholder='Type your message...'
        sx={{ fontSize: '1rem', p: '1rem', width: '100%' }}
        inputRef={message}
        onKeyDown={handleOnButtonSendMessage}
        endAdornment={
          <InputAdornment position='end'>
            <Tooltip
              title={
                <p
                  style={{
                    fontSize: '1rem',
                    width: '40px',
                    margin: '0',
                    padding: '0',
                    height: '24px',
                    textAlign: 'center',
                  }}
                >
                  Note
                </p>
              }
              followCursor={true}
              TransitionComponent={Zoom}
            >
              <FormControlLabel
                label=''
                value='bottom'
                control={<Switch color='primary' />}
                sx={{ width: '35px' }}
              />
            </Tooltip>

            <IconButton
              sx={{ borderRadius: '10px' }}
              onClick={handleSendMessage}
            >
              <SendRoundedIcon sx={{ fontSize: '2rem' }} />
            </IconButton>
          </InputAdornment>
        }
      />
    </Box>
  );
}
