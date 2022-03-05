import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      primary: {
        main: '#1e5a96',
        contrastText: '#FFFFFF',
      },
      secondary: {
        main: '#FFFFFF',
      },
    },
  });

export default function BasicButtonGroup() {
    const [flag1, setFlag1] = React.useState(true);
    const [flag2, setFlag2] = React.useState(true);
    const [flag3, setFlag3] = React.useState(true);

    const handleClick1 = () => {
        setFlag1(false);
        setFlag2(true);
        setFlag3(true);
    };

    const handleClick2 = () => {
        setFlag2(false);
        setFlag1(true);
        setFlag3(true);
    };

    const handleClick3 = () => {
        setFlag3(false);
        setFlag1(true);
        setFlag2(true);
    };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 3,
        },
      }}
    >
      <ButtonGroup size = 'large' disableElevation color="primary" variant="outlined">
        <ThemeProvider theme={theme}>
        <Button
            onClick={handleClick1}
            variant={flag1 ? "outlined" : "contained"}
            color={flag1 ? "secondary" : "primary"}>
            Status
        </Button>
        <Button
            onClick={handleClick2}
            variant={flag2 ? "outlined" : "contained"}
            color={flag2 ? "secondary" : "primary"}>
            Threshold
        </Button>
        <Button
            onClick={handleClick3}
            variant={flag3 ? "outlined" : "contained"}
            color={flag3 ? "secondary" : "primary"}>
            Usage
        </Button>
        </ThemeProvider>
      </ButtonGroup>
    </Box>
  );
}