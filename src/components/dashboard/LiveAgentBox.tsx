import { mockTransactionsTwo } from '@/data/mockData';
import { tokens, useMode } from '@/theme/theme';
import { Box, Typography } from '@mui/material';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';

export default function LiveAgentBox() {
  const [theme, colorMode] = useMode();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      sx={{
        gridColumn: {
          xs: 'span 12',
          sm: 'span 12',
          md: 'span 12',
          lg: 'span 4',
          xl: 'span 4',
        },
        gridRow: 'span 2',
        backgroundColor: colors.primary[400],
        overflow: 'auto',
        borderRadius: '10px',
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: `4px solid ${colors.primary[500]}`,
          colors: colors.grey[100],
          p: '15px',
        }}
      >
        <Typography
          color={colors.grey[100]}
          variant='h5'
          fontWeight='bold'
          fontSize='1.2rem'
          display='flex'
          justifyContent='center'
          alignItems='center'
          gap='.5rem'
        >
          <SupportAgentIcon
            sx={{ color: colors.greenAccent[500], fontSize: '2rem' }}
          />{' '}
          Live Agent Statistics
        </Typography>

        <OpenInBrowserIcon sx={{ fontSize: '2rem' }} />
      </Box>

      {mockTransactionsTwo.map((transaction, i) => (
        <Box
          key={`${transaction.agentName}-${i}`}
          display='flex'
          justifyContent='space-between'
          alignItems='center'
          borderBottom={`4px solid ${colors.primary[500]}`}
          p='15px'
        >
          <Box>
            <Typography
              variant='h5'
              fontWeight='600'
              sx={{ fontSize: '1rem', fontWeight: 'bold' }}
            >
              {transaction.agentName}
            </Typography>
          </Box>
          <Box
            color={colors.grey[100]}
            sx={{
              fontSize: '1rem',
              fontWeight: 'bold',
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {transaction.agentsClosed}
            <Typography sx={{ fontSize: '.9rem', fontWeight: 'bold' }}>
              Closed
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                color: colors.greenAccent[500],
                fontSize: '1rem',
                fontWeight: 'bold',
              }}
            >
              ${transaction.agentRevenue}
            </Typography>
            <Typography sx={{ fontSize: '.9rem', fontWeight: 'bold' }}>
              Revenue
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
}
