import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import { ColorModeContext, useMode, tokens } from '@/theme/theme';
import { Sidebar } from '@/components/navigation/Sidebar';
import { Header } from '@/components/global/Header';
import SendIcon from '@mui/icons-material/Send';
import BroadcastModal from '@/components/broadcast/modals/BroadcastModal';
import TemplateModal from '@/components/broadcast/modals/TemplateModal';
import Broadcast from '@/container/Broadcast';

const headerStyle = {
  width: '100%',
  display: 'flex',
  justifyContent: {
    xs: 'center',
    sm: 'center',
    md: 'space-between',
    lg: 'space-between',
  },
  flexDirection: {
    xs: 'column',
    sm: 'column',
    md: 'row',
    lg: 'row',
  },
  alignItems: 'center',
  gap: '1rem',
};

export default function Contacts() {
  const [theme, colorMode] = useMode();
  const colors = tokens(theme.palette.mode);

  return (
    <>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div style={{ display: 'flex' }}>
            <Sidebar />
            <main
              className='content'
              style={{ overflow: 'hidden', padding: '1rem' }}
            >
              {/* Header */}
              <Header
                title={
                  <Box sx={headerStyle}>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        gap: '.5rem',
                      }}
                    >
                      <SendIcon sx={{ fontSize: '2rem' }} /> Broadcast
                    </Box>

                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        gap: '.5rem',
                      }}
                    >
                      <TemplateModal />
                      <BroadcastModal />
                    </Box>
                  </Box>
                }
              />
              {/* Broadcast Tables */}
              <Broadcast />
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
}
