import { tokens, useMode } from '@/theme/theme';
import { Paper, Typography, Box } from '@mui/material';
import DraftTable from '@/components/broadcast/tables/DraftTable';
import HistoryTable from '@/components/broadcast/tables/HistoryTable';

const style = {
  root: {
    width: '100%',
    height: '100%',
    minHeight: '600px',
    backgroundColor: 'transparent',
    backgroundImage: 'none',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: '2rem',
    padding: '1rem',
    border: 0,
    boxShadow: 0,
  },
  box: {
    width: '100%',
  },
};

export default function Broadcast() {
  const [theme, colorMode] = useMode();
  const colors = tokens(theme.palette.mode);

  return (
    <Paper sx={style.root}>
      <Box sx={style.box}>
        <Typography mb={1} fontSize='1.2rem' fontWeight='bold'>
          Drafts
        </Typography>
        <DraftTable />
      </Box>

      <Box sx={style.box}>
        <Typography mb={1} fontSize='1.2rem' fontWeight='bold'>
          History
        </Typography>
        <HistoryTable />
      </Box>
    </Paper>
  );
}
