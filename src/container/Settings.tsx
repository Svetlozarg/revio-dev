import { useState } from 'react';
import Box from '@mui/material/Box';
import SettingsTabs from '@/components/settings/SettingsTabs';
import SettingsPanel from '@/components/settings/SettingsPanel';
import { tokens, useMode } from '@/theme/theme';

export interface TabData {
  label: string;
}

const tabData: Array<TabData> = [
  { label: 'General' },
  { label: 'Notifications' },
  { label: 'Team Members' },
  { label: 'Billing' },
  { label: 'Live Chat Behavior' },
  { label: 'Assignment Rules' },
  { label: 'Macros' },
  { label: 'Templates' },
  { label: 'Tags' },
  { label: 'Fields' },
  { label: 'WhatsApp Link Generator' },
  { label: 'Web Channel Widget' },
  { label: 'Shipping Opt-in' },
  { label: 'WhatsApp' },
  { label: 'Viber' },
  { label: 'Messenger' },
  { label: 'Instagram DM' },
  { label: 'Telegram' },
];

export default function Settings() {
  const [theme, colorMode] = useMode();
  const colors = tokens(theme.palette.mode);
  const [value, setValue] = useState<number>(0);

  const handleChangeTab = (data: number) => {
    setValue(data);
  };

  return (
    <Box
      sx={{
        height: '100%',
        flexGrow: 1,
        bgcolor: colors.primary[400],
        border: '1px solid #000',
        borderColor: 'divider',
        display: 'flex',
        borderRadius: '10px',
        overflow: 'auto',
      }}
    >
      <SettingsTabs changeTab={handleChangeTab} tabData={tabData} />
      {tabData.map((item, i) => {
        return (
          <SettingsPanel key={i} item={item.label} value={value} index={i} />
        );
      })}
    </Box>
  );
}
