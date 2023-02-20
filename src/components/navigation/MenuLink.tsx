import { tokens } from '@/theme/theme';
import { MenuItem } from 'react-pro-sidebar';
import { Typography, useTheme } from '@mui/material';
import Link from 'next/link';

interface Props {
  title: String;
  to: any;
  icon: any;
  active: boolean;
}

export default function MenuLink(props: Props) {
  const { title, to, icon, active } = props;
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={active}
      style={{
        color: colors.grey[100],
      }}
      icon={icon}
    >
      <Typography sx={{ fontSize: '1.2rem' }}>{title}</Typography>
      <Link href={to} />
    </MenuItem>
  );
}
