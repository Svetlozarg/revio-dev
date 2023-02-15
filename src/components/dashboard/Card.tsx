import { Box, Typography, useTheme } from '@mui/material';
import { tokens } from '@/theme/theme';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

interface Props {
  title: string;
  icon: any;
  rate: number;
  profit: number;
  profitType?: string;
  size?: string;
  mdBig?: string;
}

export const Card: React.FC<Props> = ({
  icon,
  rate,
  title,
  profit,
  profitType = '',
  size = '',
  mdBig = '',
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      sx={{
        gridColumn:
          size === 'large'
            ? {
                xs: 'span 12',
                sm: 'span 12',
                md: mdBig === 'large' ? 'span 12' : 'span 6',
                lg: 'span 4',
                xl: 'span 4',
              }
            : {
                xs: 'span 12',
                sm: 'span 12',
                md: 'span 6',
                lg: 'span 3',
                xl: 'span 3',
              },
        backgroundColor: colors.primary[400],
        borderRadius: '10px',
        p: '.5rem',
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {icon}
        <Typography
          sx={{
            fontSize: '1.2rem',
            color: profitType === 'negative' ? 'red' : colors.greenAccent[500],
            fontWeight: '600',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {profitType === 'negative' ? (
            <>
              - {profit}% <KeyboardArrowDownIcon sx={{ fontSize: '1.8rem' }} />
            </>
          ) : (
            <>
              + {profit}% <KeyboardArrowUpIcon sx={{ fontSize: '1.8rem' }} />
            </>
          )}
        </Typography>
      </Box>

      {/* Mid */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Typography sx={{ fontSize: '2rem', fontWeight: '800' }}>
          {rate}
        </Typography>
        <Typography
          sx={{
            fontSize: '1.1rem',
            fontWeight: '600',
            color: colors.greenAccent[500],
          }}
        >
          {title}
        </Typography>
      </Box>
    </Box>
  );
};
