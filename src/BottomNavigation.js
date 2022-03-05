import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import SettingsIcon from '@mui/icons-material/Settings';
import HomeIcon from '@mui/icons-material/Home';
import DateRangeIcon from '@mui/icons-material/DateRange';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: 500 }}>
      
      <BottomNavigation
        sx={{
          bgcolor: '#232526',
          '& .Mui-selected': {
            '& .MuiBottomNavigationAction-label': {
              fontSize: theme => theme.typography.caption,
              transition: 'none',
              fontWeight: 'bold',
              lineHeight: '20px'
            },
            '& .MuiSvgIcon-root, & .MuiBottomNavigationAction-label': {
              color: '#39B54A'
            }
          }
        }}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction style={{ color: 'white' }} label="Weekly" icon={<DateRangeIcon />} />
        <BottomNavigationAction style={{ color: 'white' }} label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction style={{ color: 'white' }} label="Settings" icon={<SettingsIcon />} />
      </BottomNavigation>
    </Box>
  );
}