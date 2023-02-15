import { Box, Button, Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
// import DrawerOrders from './DrawerOrders';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import StarIcon from '@mui/icons-material/Star';
import { tokens, useMode } from '@/theme/theme';
import shopifyIcon from '@/assets/shopify-icon.svg';
import Image from 'next/image';

interface Props {
  user: any;
}

interface User {
  name: string;
  email: string;
  phone: string;
  waPhone: string;
}

export const Drawer: React.FC<Props> = ({ user }) => {
  const { name, email, phone, waPhone }: User = user;
  const [theme, colorMode] = useMode();
  const colors = tokens(theme.palette.mode);

  const drawerContent = () => (
    <Box
      sx={{
        width: '320px',
        height: '800px',
        padding: '0',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}
    >
      {/* User Info */}
      <Box
        sx={{
          height: '340px',
          padding: '1rem',
          display: 'flex',
          flexDirection: 'column',
          rowGap: '.5rem',
        }}
      >
        {/* Name */}
        <Typography
          sx={{
            fontSize: '1rem',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: '4rem',
          }}
        >
          <PersonIcon sx={{ fontSize: '1.5rem' }} />
          {name}
        </Typography>

        {/* Email */}
        <Typography
          sx={{
            fontSize: '1rem',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: '4rem',
          }}
        >
          <EmailIcon sx={{ fontSize: '1.5rem' }} />
          {email}
        </Typography>

        {/* Phone */}
        <Typography
          sx={{
            fontSize: '1rem',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: '4rem',
          }}
        >
          <LocalPhoneIcon sx={{ fontSize: '1.5rem' }} />
          {phone}
        </Typography>

        {/* WA Phone */}
        <Typography
          sx={{
            fontSize: '1rem',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: '4rem',
          }}
        >
          <WhatsAppIcon sx={{ fontSize: '1.5rem' }} />
          {waPhone}
        </Typography>

        {/* Total Reviews */}
        <Typography
          sx={{
            fontSize: '1rem',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: '4rem',
          }}
        >
          <StarIcon sx={{ fontSize: '1.5rem' }} />3 reviews
        </Typography>

        {/* Tags */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignContent: 'center',
            margin: '.2rem 0',
          }}
        >
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: '14px',
              fontWeight: 'bold',
              padding: '5px 20px',
              borderRadius: '10px',
              textTransform: 'none',
            }}
          >
            Add Tag
          </Button>
          <Box
            sx={{
              width: '180px',
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
              margin: '0 5px',
              gap: '10px',
              overflowX: 'auto',
            }}
          >
            <Typography sx={{ fontSize: '1rem' }}>Loyalty</Typography>
            <Typography sx={{ fontSize: '1rem' }}>VIP</Typography>
          </Box>
        </Box>

        {/* Draft Order Button */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: '14px',
              fontWeight: 'bold',
              padding: '5px 20px',
              borderRadius: '10px',
              textTransform: 'none',
            }}
          >
            Create Draft Order
          </Button>

          <Image
            src={shopifyIcon}
            alt='Shopify Icon'
            style={{
              width: 'auto',
              height: '35px',
            }}
          />
        </Box>

        {/* Total Spent */}
        <Typography
          sx={{
            fontSize: '1rem',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: '4rem',
          }}
        >
          Total Spent: $2340.00
        </Typography>

        {/* Orders */}
        <Typography
          sx={{
            fontSize: '1rem',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: '4rem',
          }}
        >
          Orders: 5
        </Typography>
      </Box>

      {/* Orders Tab */}
      <Box sx={{ flexGrow: '1', overflow: 'auto' }}>
        {/* <DrawerOrders /> */}
      </Box>
    </Box>
  );

  return (
    <div>
      <Box
        sx={{
          backgroundColor: colors.primary[400],
          borderRadius: '10px',
          border: '1px solid #000',
          borderColor: 'divider',
        }}
      >
        {drawerContent()}
      </Box>
    </div>
  );
};
