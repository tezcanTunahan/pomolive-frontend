import ReactSlider from 'react-slider';
import { useContext } from 'react';
import SettingsContext from '../store/SettingsContext';
import Button from '../components/UI/Button';

export default function Settings() {
  const settingsInfo = useContext(SettingsContext);

  return (
    <div className='settings'>
      <label className='settings__label' htmlFor=''>
        Work : {settingsInfo.workMinutes}
      </label>
      <ReactSlider
        className='settings__slider'
        thumbClassName='settings__thumb'
        trackClassName='settings__track'
        value={settingsInfo.workMinutes}
        min={1}
        max={120}
        onChange={(newValue) => settingsInfo.setWorkMinutes(newValue)}
      />
      <label className='settings__label' htmlFor=''>
        Breake : {settingsInfo.breakMinutes}
      </label>
      <ReactSlider
        className='settings__slider settings__slider--green'
        thumbClassName='settings__thumb--green'
        trackClassName='settings__track'
        value={settingsInfo.breakMinutes}
        min={1}
        max={120}
        onChange={(newValue) => settingsInfo.setBreakMinutes(newValue)}
      />
      <Button
        onClick={() => {
          settingsInfo.setShowSetting(false);
        }}
        text={
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
            />
          </svg>
        }
      />
    </div>
  );
}
