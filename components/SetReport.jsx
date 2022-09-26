import Button from '../components/ui/Button';
import ReactSlider from 'react-slider';
import { setReport } from '../api/index';
import { useEffect, useState } from 'react';

export default function SetReport({ setShowReport, showReport, date }) {
  const [workHours, setWorkHours] = useState(0);

  const setHandle = async () => {
    await setReport({ date, hours: workHours });
    setShowReport(!showReport);
  };

  return (
    <div>
      <div className='setreport'>
        <div className='setreport__top'>
          <h1>How many Hours did you work today</h1>
          <h3>date: {date}</h3>
          <h3>work hours: {workHours}</h3>
        </div>
      </div>
      <div className='setreport__mid'>
        <ReactSlider
          className='settings__slider settings__slider--red'
          thumbClassName='settings__thumb settings__thumb--red'
          trackClassName='settings__track'
          value={workHours}
          min={0}
          max={24}
          onChange={(newValue) => setWorkHours(newValue)}
        />
      </div>
      <div className='setreport__bottom'>
        <Button onClick={setHandle} text='set Rerport' style={{ padding: '1rem' }} />
      </div>
    </div>
  );
}
