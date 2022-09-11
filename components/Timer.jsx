import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PlayButton from './PlayButton';
import PauseButton from './PauseButton';
import SettingButtons from './SettingButtons';
import { useContext, useState, useEffect, useRef } from 'react';
import SettingsContext from '../store/SettingsContext';
import SwitchButton from '../components/SwitchButton';

export default function Timer() {
  const settingsInfo = useContext(SettingsContext);

  const [isPaused, setIsPaused] = useState(false);
  const [mode, setMode] = useState('work');
  const [secondsLeft, setSecondsLeft] = useState(0);

  const isPausedRef = useRef(false);
  const modeRef = useRef(mode);
  const secondsLeftRef = useRef(secondsLeft);

  const totalSeconds = mode === 'work' ? settingsInfo.workMinutes * 60 : settingsInfo.breakMinutes * 60;
  const percentage = Math.round((secondsLeft / totalSeconds) * 100);
  let minute = Math.floor(secondsLeft / 60);
  let seconds = secondsLeft % 60;
  if (seconds < 10) seconds = '0' + seconds;

  const switchHandle = () => {
    const nextMode = mode === 'work' ? 'break' : 'work';
    const nextSeconds = (nextMode === 'work' ? settingsInfo.workMinutes : settingsInfo.breakMinutes) * 60;

    setMode(nextMode);
    modeRef.current = nextMode;
    setSecondsLeft(nextSeconds);
    secondsLeftRef.current = nextSeconds;
  };
  const tick = () => {
    secondsLeftRef.current = secondsLeftRef.current - 1;
    setSecondsLeft(secondsLeftRef.current);
  };

  useEffect(() => {
    secondsLeftRef.current = settingsInfo.workMinutes * 60;
    setSecondsLeft(secondsLeftRef.current);

    setInterval(() => {
      if (isPausedRef.current) return;
      if (secondsLeftRef.current === 0) return switchHandle();
      tick();
    }, 1000);
  }, [settingsInfo]);

  return (
    <div className='timer'>
      <div className='timer__top'>
        <CircularProgressbar
          value={percentage}
          text={`${minute}: ${seconds}`}
          styles={buildStyles({
            // Colors
            pathColor: mode === 'work' ? 'red' : 'green',
            textColor: '#f88',
            trailColor: 'rgb(255, 255, 255.2)',
            backgroundColor: '#3e98c7',
          })}
        />
      </div>
      <div className='timer__button'>
        {isPaused ? (
          <PlayButton
            onClick={() => {
              setIsPaused(false);
              isPausedRef.current = false;
            }}
          />
        ) : (
          <PauseButton
            onClick={() => {
              setIsPaused(true);
              isPausedRef.current = true;
            }}
          />
        )}
        <SettingButtons onClick={() => settingsInfo.setShowSetting(true)} />
        <SwitchButton onClick={switchHandle} />
      </div>
    </div>
  );
}
