import { useState } from 'react';
import {
  Box,
  FormControl,
  FormControlLabel,
  FormGroup,
  Radio,
  RadioGroup,
  Stack,
  Switch,
  Typography,
} from '@mui/material';

const classes = {
  box: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '100%',
    padding: '4rem 10px'
  },

  text: {
    width: '400px',
  },

  radio: {
    width: '300px',
  },
};

export default function LiveChatBehavior() {
  const [value, setValue] = useState<string>('beh1');
  const [state, setState] = useState<any>({
    assign: true,
    grant: true,
    allow: true,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  const handleChangeConv = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <Stack
      direction='column'
      justifyContent='center'
      alignItems='center'
      spacing={2}
      width='100%'
    >
      <Box sx={classes.box}>
        <Typography variant='h4'>Live Chat Behavior</Typography>

        <FormControl sx={classes.radio}>
          <RadioGroup value={value} onChange={handleChange}>
            <FormControlLabel
              value='beh1'
              control={<Radio />}
              label='Any message starts a conversation'
            />
            <FormControlLabel
              value='beh2'
              control={<Radio />}
              label='Conversations should be opened explicitly'
            />
          </RadioGroup>
        </FormControl>

        <Typography variant='body1' sx={classes.text}>
          Open a new chat in Live Chat with any message from a contact and mark it "Unassigned". This setting excludes automated conversations located in the "Closed" folder.
        </Typography>
      </Box>

      <Box sx={classes.box}>
        <Typography variant='h4'>Live Chat Behavior</Typography>

        <FormControl sx={classes.radio} component='fieldset' variant='standard'>
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  checked={state.assign}
                  onChange={handleChangeConv}
                  name='assign'
                />
              }
              label='Assign to the same agent'
            />
          </FormGroup>
        </FormControl>

        <Typography variant='body1' sx={classes.text}>
          When contact re-opens a closed conversation you can assign it to the same agent that previously worked on it. Rither way conversation will be moved to the Unassigned folder.
        </Typography>
      </Box>

      <Box sx={classes.box}>
        <Typography variant='h4'>Live Chat Behavior</Typography>

        <FormControl sx={classes.radio} component='fieldset' variant='standard'>
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  checked={state.grant}
                  onChange={handleChangeConv}
                  name='grant'
                />
              }
              label='Grant access to all converstions for all agents'
            />
          </FormGroup>
        </FormControl>

        <Typography variant='body1' sx={classes.text}>
          Disable this option, if you want live chat agents to have access only to new conversations and conversations that are assigned to them.
        </Typography>
      </Box>

      <Box sx={classes.box}>
        <Typography variant='h4'>Live Chat Behavior</Typography>

        <FormControl sx={classes.radio} component='fieldset' variant='standard'>
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  checked={state.allow}
                  onChange={handleChangeConv}
                  name='allow'
                />
              }
              label='Allow sound alerts'
            />
          </FormGroup>
        </FormControl>

        <Typography variant='body1' sx={classes.text}>
        
        </Typography>
      </Box>
    </Stack>
  );
}
