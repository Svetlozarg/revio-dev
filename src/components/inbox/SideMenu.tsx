import { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Tabs, Tab, Box, Typography } from '@mui/material';
import InboxIcon from '@mui/icons-material/Inbox';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import GroupIcon from '@mui/icons-material/Group';
import { tokens, useMode } from '@/theme/theme';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import Link from 'next/link';
import Image from 'next/image';
import messengerIcon from '@/assets/messenger-icon.svg';
import viberIcon from '@/assets/viber-icon.svg';

export default function SideMenu() {
  const [theme, colorMode] = useMode();
  const colors = tokens(theme.palette.mode);
  const classes = useStyles();
  const [chatCategorie, setChatCategorie] = useState<number>(1);

  const handlechatCategorie = (event: any, newValue: any) => {
    setChatCategorie(newValue);
  };

  const tabDataOne = [
    {
      icon: (
        <InboxIcon
          sx={{
            color: '#fff',
          }}
        />
      ),
      text: 'Unassigned',
      total: '(0)',
    },
    {
      icon: (
        <QuestionAnswerIcon
          sx={{
            color: '#fff',
          }}
        />
      ),
      text: 'My Chats',
      total: '(9)',
    },
    {
      icon: (
        <GroupIcon
          sx={{
            color: '#fff',
          }}
        />
      ),
      text: 'Team',
      total: '(18)',
    },
  ];

  const tabDataTwo = [
    {
      icon: (
        <WhatsAppIcon
          sx={{
            color: '#fff',
          }}
        />
      ),
      text: 'WhatsApp',
      total: '(9)',
    },
    {
      icon: (
        <Image
          src={messengerIcon}
          alt='Picture of the author'
          style={{
            width: 'auto',
            height: '19px',
          }}
        />
      ),
      text: 'Messenger',
      total: '(5)',
    },
    {
      icon: (
        <InstagramIcon
          sx={{
            color: '#fff',
          }}
        />
      ),
      text: 'Instagram',
      total: '(2)',
    },
    {
      icon: (
        <Image
          src={viberIcon}
          alt='Picture of the author'
          style={{
            width: 'auto',
            height: '20px',
          }}
        />
      ),
      text: 'Viber',
      total: '(8)',
    },
    {
      icon: (
        <TelegramIcon
          sx={{
            color: '#fff',
          }}
        />
      ),
      text: 'Telegram',
      total: '(6)',
    },
  ];

  return (
    <Box className={classes.root}>
      <Box>
        {/* Conversation */}
        <Typography className={classes.text}>Conversations</Typography>

        {/* Conversations Tabs */}
        <Tabs
          value={chatCategorie}
          onChange={handlechatCategorie}
          orientation='vertical'
        >
          {tabDataOne.map((tab, i) => {
            const link = `/inbox?filter=${tab.text.toLocaleLowerCase()}`;
            return (
              <Tab
                key={i + 1}
                value={i + 1}
                label={
                  <Link
                    href={link}
                    style={{ textDecoration: 'none', width: '100%' }}
                  >
                    <Box
                      sx={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          gap: '.5rem',
                        }}
                      >
                        {tab.icon}
                        <Typography
                          sx={{
                            fontSize: '1rem',
                            color:
                              theme.palette.mode === 'dark' ? '#fff' : '#000',
                            textTransform: 'none',
                          }}
                        >
                          {tab.text}
                        </Typography>
                      </Box>
                      <Typography
                        sx={{
                          fontSize: '1rem',
                          color:
                            theme.palette.mode === 'dark' ? '#fff' : '#000',
                        }}
                      >
                        {tab.total}
                      </Typography>
                    </Box>
                  </Link>
                }
                sx={{
                  backgroundColor:
                    i + 1 === chatCategorie && theme.palette.mode === 'dark'
                      ? '#2a3942'
                      : i + 1 === chatCategorie &&
                        theme.palette.mode === 'light'
                      ? '#f0f2f5'
                      : '',
                }}
              />
            );
          })}
        </Tabs>

        {/* Channels */}
        <Typography className={classes.text}>Channels</Typography>

        {/* Channel Tabs */}
        <Tabs
          value={chatCategorie}
          onChange={handlechatCategorie}
          orientation='vertical'
        >
          {tabDataTwo.map((tab, i) => {
            const link = `/inbox?filter=${tab.text.toLocaleLowerCase()}`;
            return (
              <Tab
                key={i + 4}
                value={i + 4}
                label={
                  <Link href={link} className={classes.link}>
                    <Box className={classes.tabMenu}>
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          gap: '.5rem',
                        }}
                      >
                        {tab.icon}
                        <Typography
                          sx={{
                            fontSize: '1rem',
                            color:
                              theme.palette.mode === 'dark' ? '#fff' : '#000',
                            textTransform: 'none',
                          }}
                        >
                          {tab.text}
                        </Typography>
                      </Box>
                      <Typography
                        sx={{
                          fontSize: '1rem',
                          color:
                            theme.palette.mode === 'dark' ? '#fff' : '#000',
                        }}
                      >
                        {tab.total}
                      </Typography>
                    </Box>
                  </Link>
                }
                sx={{
                  backgroundColor:
                    i + 4 === chatCategorie && theme.palette.mode === 'dark'
                      ? '#2a3942'
                      : i + 4 === chatCategorie &&
                        theme.palette.mode === 'light'
                      ? '#f0f2f5'
                      : '',
                }}
              />
            );
          })}
        </Tabs>
      </Box>
    </Box>
  );
}

const useStyles = makeStyles({
  root: {
    maxWidth: '220px !important',
    height: '100%',
    borderRight: '1px solid #000',
    borderColor: 'divider',
    borderRadius: '10px',
    padding: '0 1rem',
  },
  tabMenu: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: '1.3rem',
    padding: '1rem 0',
  },
  link: {
    textDecoration: 'none',
    width: '100%',
  },
});
