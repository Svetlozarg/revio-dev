import { Typography, Box } from '@mui/material';
import WhatsAppSettings from './channels/WhatsAppSettings';
import LiveChatBehavior from './inbox/LiveChatBehavior';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div 
      style={{
        width: '100%'
      }}
      role='tabpanel'
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3, width: '100%' }}>
          {children}
        </Box>
      )}
    </div>
  );
}

interface Props {
  item: string;
  value: number;
  index: number;
}

export default function SettingsPanel(props: Props) {
  const { item, value, index } = props;

  return (
    <TabPanel value={value} index={index}>

      {item !== 'WhatsApp' && item !== 'Live Chat Behavior' && <Typography>Item {index}</Typography>}

      {item === 'Live Chat Behavior' && <LiveChatBehavior />}
      {item === 'WhatsApp' && <WhatsAppSettings />}
    </TabPanel>
  );
}
