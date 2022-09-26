import Timer from '../components/Timer';
import Settings from '../components/Settings';
import SettingsContext from '../store/SettingsContext';
import { useState } from 'react';
import Container from '../components/ui/Container';

export default function Home() {
  const [showSettings, setShowSetting] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(45);
  const [breakMinutes, setBreakMinutes] = useState(15);

  return (
    <div>
      <Container>
        <main className='index'>
          <SettingsContext.Provider
            value={{
              showSettings,
              setShowSetting,
              workMinutes,
              breakMinutes,
              setWorkMinutes,
              setBreakMinutes,
            }}
          >
            <div className='index__mid'>{showSettings ? <Settings /> : <Timer />}</div>
          </SettingsContext.Provider>
        </main>
      </Container>
    </div>
  );
}
