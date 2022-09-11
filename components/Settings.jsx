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
      />
    </div>
  );
}
