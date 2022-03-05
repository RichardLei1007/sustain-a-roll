import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import './App.css';

export default function ProgressBar() {
    const percentage = 15;
    return (
        <CircularProgressbar className = "progressBar"
            value={percentage}
            text={`${percentage}/100`}
            background={true}
            backgroundPadding={6}
            styles={buildStyles({
            // Rotation of path and trail, in number of turns (0-1)
            rotation: 0,

            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            strokeLinecap: 'round',

            // Text size
            textSize: '16px',

            // How long animation takes to go from one percentage to another, in seconds
            pathTransitionDuration: 0.75,

            // Can specify path transition in more detail, or remove it entirely
            // pathTransition: 'none',

            // Colors
            pathColor: `rgba(30, 90, 150)`,
            textColor: 'white',
            trailColor: 'white',
            backgroundColor: '#2B2E33',
            backgroundPadding: 1,
            })}
        />
    );
}