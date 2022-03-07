import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ForestIcon from '@mui/icons-material/Forest';
import OpacityIcon from '@mui/icons-material/Opacity';
import DataUsageIcon from '@mui/icons-material/DataUsage';

export default function BasicList() {
  return (
    <Box 
        sx={{
            display: 'flex',
            flexDirection: 'column',
            marginLeft: '60px',
            // marginBottom: '5px',
            maxWidth: 380, 
            bgcolor: '#232526',
            borderRadius: 5 }}
    >
      <nav aria-label="main mailbox folders">
        <List>
        <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon style={{ color: 'white' }}>
                <DataUsageIcon />
              </ListItemIcon>
              <ListItemText
                  primary="You used 28 sheets this week!"
                  primaryTypographyProps={{
                    color: 'white',
                    fontWeight: 'medium',
                    variant: 'body2',
                  }}
                />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon style={{ color: 'white' }}>
                <ForestIcon />
              </ListItemIcon>
              <ListItemText
                  primary="You saved 0.8 trees this week!"
                  primaryTypographyProps={{
                    color: 'white',
                    fontWeight: 'medium',
                    variant: 'body2',
                  }}
                />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon style={{ color: 'white' }}>
                <OpacityIcon />
              </ListItemIcon>
              <ListItemText
                  primary="You saved 0.2 gallons of water this week!"
                  primaryTypographyProps={{
                    color: 'white',
                    fontWeight: 'medium',
                    variant: 'body2',
                  }}
                />
            </ListItemButton>
          </ListItem>
          
        </List>
      </nav>
    </Box>
  );
}