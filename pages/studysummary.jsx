import Container from '../components/ui/Container';
import { useEffect, useState } from 'react';
import GetReport from '../components/GetReport';
import SetReport from '../components/SetReport';
import Button from '../components/ui/Button';
import NoUser from '../components/NoUser';

export default function Studysummary() {
  const [showReport, setShowReport] = useState(false);
  const [date, setDate] = useState();
  const [user, setUser] = useState();

  useEffect(() => {
    setDate(new Date().toISOString().slice(0, 10));
    setUser(JSON.parse(localStorage.getItem('user')));
  }, []);
  return (
    <Container>
      {user ? (
        <>
          <div className='studysummary'>
            <div className='studysummary__top'>
              {showReport ? (
                <GetReport date={date} />
              ) : (
                <SetReport
                  date={date}
                  setShowReport={setShowReport}
                  showReport={showReport}
                />
              )}
            </div>
            <div className='studysummary__bottom'>
              <Button
                style={{ padding: '1rem' }}
                onClick={() => {
                  setShowReport(!showReport);
                }}
                text={showReport ? 'Change report' : 'show report'}
              />
            </div>
          </div>
        </>
      ) : (
        <NoUser />
      )}
    </Container>
  );
}
