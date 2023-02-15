import { useState } from 'react';
import { tokens, useMode } from '@/theme/theme';
import { Box, Stack, Button } from '@mui/material';
import Breadcrumbs from '@/components/global/Breadcrumbs';
import TemplateForm from '../forms/TemplateForm';
import PreviewBox from '../PreviewBox';

interface Props {
  name: string;
  channel: string;
  handleCloseForm: any;
}

export default function TemplateFormModal(props: Props) {
  const { name, channel, handleCloseForm } = props;
  const [theme, colorMode] = useMode();
  const colors = tokens(theme.palette.mode);
  const [message, setMessage] = useState<string>('');

  const pull_message = (message: string) => {
    setMessage(message);
  };

  return (
    <Box>
      {/* Header */}
      <Stack
        direction={{
          xs: 'column',
          sm: 'column',
          md: 'row',
          lg: 'row',
        }}
        justifyContent={{
          xs: 'center',
          sm: 'center',
          md: 'space-between',
          lg: 'space-between',
        }}
        gap={2}
        alignItems='center'
        mb={2}
      >
        {/* Breadcrumbs */}
        <Breadcrumbs
          links={[
            'Create New Template',
            channel.charAt(0).toUpperCase() + channel.slice(1),
            name.charAt(0).toUpperCase() + name.slice(1),
          ]}
        />
        {/* Button Box */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            gap: '1rem',
          }}
        >
          {/* Discard Button */}
          <Button
            sx={{
              width: '140px',
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: '14px',
              fontWeight: 'bold',
              padding: '5px 20px',
              borderRadius: '10px',
              textTransform: 'none',
            }}
            onClick={() => {
              handleCloseForm();
            }}
          >
            Discard
          </Button>
          {/* Save Button */}
          <Button
            sx={{
              width: '140px',
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: '14px',
              fontWeight: 'bold',
              padding: '5px 20px',
              borderRadius: '10px',
              textTransform: 'none',
            }}
          >
            Save
          </Button>
          {/* Send for Review Button */}
          <Button
            sx={{
              width: '140px',
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: '14px',
              fontWeight: 'bold',
              padding: '5px 20px',
              borderRadius: '10px',
              textTransform: 'none',
            }}
          >
            Send for Review
          </Button>
        </Box>
      </Stack>

      {/* Modal Content */}
      <Stack
        direction={{ xs: 'column', sm: 'column', md: 'row', lg: 'row' }}
        justifyContent='space-between'
        alignItems={{
          xs: 'center',
          sm: 'center',
          md: 'flex-start',
          lg: 'flex-start',
        }}
        spacing={1}
      >
        {/* Form Container */}
        <TemplateForm
          name={name}
          channel={channel}
          onChangeMessage={pull_message}
        />

        {/* Preview Box */}
        <PreviewBox message={message} />
      </Stack>
    </Box>
  );
}
