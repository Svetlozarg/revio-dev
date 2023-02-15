import { CssBaseline, ThemeProvider } from '@mui/material';
import { ColorModeContext, useMode, tokens } from '@/theme/theme';
import { Sidebar } from '@/components/navigation/Sidebar';
import SettingsIcon from '@mui/icons-material/Settings';
import { Header } from '@/components/global/Header';
import Settings from '@/container/Settings';

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
                  <>
                    <SettingsIcon sx={{ fontSize: '2rem' }} /> Settings
                  </>
                }
              />

              {/* Settings Page */}
              <Settings />
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
}
