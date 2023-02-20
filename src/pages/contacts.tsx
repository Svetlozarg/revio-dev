import { CssBaseline, ThemeProvider } from '@mui/material';
import { ColorModeContext, useMode, tokens } from '@/theme/theme';
import { Sidebar } from '@/components/navigation/Sidebar';
import PersonIcon from '@mui/icons-material/Person';
import { Header } from '@/components/global/Header';
import Contacts from '@/container/Contacts';

export default function Page() {
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
                    <PersonIcon sx={{ fontSize: '2rem' }} /> Contacts
                  </>
                }
              />

              {/* Contacts Table */}
              {/* <ContactsTable /> */}
              <Contacts />
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
}
