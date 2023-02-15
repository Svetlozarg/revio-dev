import { CssBaseline, ThemeProvider } from '@mui/material';
import { ColorModeContext, useMode, tokens } from '@/theme/theme';
import { Sidebar } from '@/components/navigation/Sidebar';
import StarIcon from '@mui/icons-material/Star';
import { Header } from '@/components/global/Header';
import Reviews from '@/container/Reviews';

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
                    <StarIcon sx={{ fontSize: '2rem' }} /> Reviews
                  </>
                }
              />

              {/* Contacts Table */}
              <Reviews />
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
}
