import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import 'react-pro-sidebar/dist/css/styles.css';
import { tokens } from '@/theme/theme';
import HomeIcon from '@mui/icons-material/Home';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import EmailIcon from '@mui/icons-material/Email';
import SettingsIcon from '@mui/icons-material/Settings';
import logo from '@/assets/revio_logo.png';
import logoLight from '@/assets/revio_logo-light.png';
import SendIcon from '@mui/icons-material/Send';
import PersonIcon from '@mui/icons-material/Person';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import StarIcon from '@mui/icons-material/Star';
import Image from 'next/image';
import UserBox from './UserBox';
import MenuLink from './MenuLink';

interface MenuData {
  title: string;
  to: string;
  icon: any;
}

const menuData: Array<MenuData> = [
  { title: 'Dashboard', to: '/', icon: <HomeIcon /> },
  { title: 'Inbox', to: '/inbox?filter=unassigned', icon: <EmailIcon /> },
  { title: 'Broadcast', to: '/broadcast', icon: <SendIcon /> },
  { title: 'Contacts', to: '/contacts', icon: <PersonIcon /> },
  { title: 'Automations', to: '/automations', icon: <SmartToyIcon /> },
  { title: 'Reviews', to: '/reviews', icon: <StarIcon /> },
  { title: 'Settings', to: '/settings', icon: <SettingsIcon /> },
];

export const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const router = useRouter();
  const [path, setPath] = useState<string>(router.asPath);

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      setPath(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);

  return (
    <Box
      sx={{
        '& .pro-sidebar-inner': {
          background: `${colors.primary[400]} !important`,
        },
        '& .pro-icon-wrapper': {
          backgroundColor: 'transparent !important',
        },
        '& .pro-inner-item': {
          padding: '5px 35px 5px 20px !important',
        },
        '& .pro-inner-item:hover': {
          color: '#868dfb !important',
        },
        '& .pro-menu-item.active': {
          color: '#6870fa !important',
        },
      }}
    >
      {/* Sidebar */}
      <ProSidebar collapsed={isCollapsed}>
        {/* Menu */}
        <Menu iconShape='square'>
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display='flex'
                justifyContent='space-between'
                alignItems='center'
                ml='15px'
              >
                <Typography variant='h3' color={colors.grey[100]}>
                  <Image
                    src={theme.palette.mode === 'dark' ? logoLight : logo}
                    loading='lazy'
                    alt='Revio Logo'
                    style={{ width: 'auto', height: '40px' }}
                  />
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {/* User Box */}
          {!isCollapsed && <UserBox />}

          {/* Menu Items */}
          <Box paddingLeft={isCollapsed ? undefined : '10%'}>
            {menuData.map((item, i) => {
              return (
                <MenuLink
                  active={path === item.to ? true : false}
                  key={i}
                  title={item.title}
                  to={item.to}
                  icon={item.icon}
                />
              );
            })}
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};
