import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import './App.css';

export default function WeeklyReport(props) {
    return (
        <CircularProgressbar className = "progressBarWeekly"
            value={88}
            text={`${88}% \n of last week`}
            background={true}
            backgroundPadding={6}
            styles={buildStyles({
            // Rotation of path and trail, in number of turns (0-1)
            rotation: 0,

            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            strokeLinecap: 'round',

            // Text size
            textSize: '8px',

            // How long animation takes to go from one percentage to another, in seconds
            pathTransitionDuration: 0.75,

            // Can specify path transition in more detail, or remove it entirely
            // pathTransition: 'none',

            // Colors
            pathColor: `rgba(108, 187, 60)`,
            textColor: 'white',
            trailColor: 'white',
            backgroundColor: '#2B2E33',
            backgroundPadding: 1,
            })}
        >
        </CircularProgressbar>
    );
}