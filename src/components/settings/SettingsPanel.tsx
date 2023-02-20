import { Typography, Box } from '@mui/material';
import WhatsAppSettings from './channels/WhatsAppSettings';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
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
      {item === 'WhatsApp' && <WhatsAppSettings />}
    </TabPanel>
  );
}
