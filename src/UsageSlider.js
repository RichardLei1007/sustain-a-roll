import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';

const Input = styled(MuiInput)`
  width: 42px;
`;

export default function ThresholdSlider(props) {
  const [value, setValue] = React.useState(3);

  props.saveUsage(value);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === '' ? '' : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
  };

  return (
    <Box sx={{ 
      bgcolor: '#232526',
      padding: '20px',
      borderRadius: 10,
      width: 300, 
      display: 'flex',
      flexDirection: 'column',
      marginLeft: 'auto',
      marginRight: 'auto', 
      }}
    >
      <Typography style={{color: "white", fontWeight: 'bold', fontSize: '20px'}} id="input-slider" gutterBottom>
        Usage per Tear
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs>
          <Slider style={{color: "white"}}
            value={typeof value === 'number' ? value : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
            color="secondary"
            max={10}
            min={0}
            step={1}
          />
        </Grid>
        <Grid item>
          <Input style={{color: "white", fontSize: '20px'}}
            value={value}
            size="small"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 1,
              min: 0,
              max: 10,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}