import { useState } from 'react';
import { Tab, Tabs, Typography } from '@mui/material';
import { TabData } from '@/container/Settings';

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

interface Props {
  changeTab: any;
  tabData: Array<TabData>;
}

export default function SettingsTabs(props: Props) {
  const { changeTab, tabData } = props;
  const [value, setValue] = useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    changeTab(newValue);
  };

  return (
    <Tabs
      orientation='vertical'
      variant='scrollable'
      value={value}
      onChange={handleChange}
      sx={tabsStyles}
    >
      {tabData.map((item: TabData, i: number) => {
        return (
          <Tab
            key={i}
            sx={{
              m: 0,
              p: 0,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}
            label={
              <Typography
                sx={{
                  color: value === i ? '#fff' : '#D3D3D3',
                  textTransform: 'none',
                  fontSize: '1rem',
                  pl: 6,
                }}
              >
                {item.label}
              </Typography>
            }
            {...a11yProps(i)}
          />
        );
      })}
    </Tabs>
  );
}

const tabsStyles = {
  width: '100%',
  maxWidth: '250px',
  borderRight: 1,
  borderColor: 'divider',
  justifyContent: 'flex-start',
};
