import { tokens } from '@/theme/theme';
import { useTheme, Button as MUIButton } from '@mui/material';

interface Props {
  text: string;
  padding: string;
}

export default function Button(props: Props) {
  const { text, padding } = props;
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MUIButton
      sx={{
        backgroundColor: colors.blueAccent[700],
        color: colors.grey[100],
        fontSize: '14px',
        fontWeight: 'bold',
        padding: padding,
        borderRadius: '10px',
        border: '2px solid transparent',
        textTransform: 'none',
        '&:hover': {
          borderColor: colors.blueAccent[700],
        },
      }}
    >
      {text}
    </MUIButton>
  );
}
