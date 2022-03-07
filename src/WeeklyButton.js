import { Button } from '@mui/material';
import AssessmentIcon from '@mui/icons-material/Assessment';
import Box from '@mui/material/Box';

export default function WeeklyButton() {
    return (
        <Box
            sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'left',
            marginLeft: '20px',
            }}
        >
            <Button className = "pastReports" style={{
                borderRadius: 10,
                backgroundColor: "#232526", 
                maxWidth: '160px', 
                maxHeight: '40px'}} 
                variant="contained"
                disableElevation 
                startIcon={<AssessmentIcon />}>Past Reports
            </Button>
        </Box>
    );
}