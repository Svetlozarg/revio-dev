import { tokens, useMode } from '@/theme/theme';
import { Box, Typography } from '@mui/material';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

interface Props {
  message: string;
}

const styles = {
  previewBoxStyle: {
    width: { xs: '100%', sm: '100%', md: '500px', lg: '500px' },
    flexGrow: '1',
    height: { xs: '100%', sm: '100%', md: '800px', lg: '800px' },
    maxHeight: 'stretch',
    border: '1px solid',
    borderColor: 'devider',
    borderRadius: '10px',
  },
  previewHeaderBoxStyle: {
    height: '50px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    px: '.5rem',
    py: '.5rem',
    flex: '1 auto',
  },
  contentBox: {
    borderRadius: '10px',
    px: '1rem',
    py: '2rem',
    height: 'calc(100% - 50px)',
  },
  innerBox: {
    bgcolor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: '10px',
    p: '1rem',
  },
};

export default function PreviewBox(props: Props) {
  const { message } = props;
  const [theme, colorMode] = useMode();
  const colors = tokens(theme.palette.mode);

  return (
    <Box sx={styles.previewBoxStyle}>
      {/* Header */}
      <Box sx={styles.previewHeaderBoxStyle}>
        <RemoveRedEyeIcon sx={{ fontSize: '1.5rem' }} />
        <Box
          sx={{
            flex: 'auto',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography
            sx={{ fontSize: '1.5rem', fontWeight: 'bold', pr: '.5rem' }}
          >
            Preview
          </Typography>
        </Box>
      </Box>

      {/* Content */}
      <Box
        className={
          theme.palette.mode === 'dark' ? 'dialog-box-dark' : 'dialog-box-light'
        }
        sx={styles.contentBox}
      >
        <Box sx={styles.innerBox}>
          {message === ''
            ? "Hey, {{FirstName}}, thank you for joining in the club! You've unlocked your 20% discount. Would you like to learn more?"
            : message}
        </Box>
      </Box>
    </Box>
  );
}
