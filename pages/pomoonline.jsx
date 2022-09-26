import React, { useEffect, useState } from 'react';
import VideoPlayer from '../components/VideoPlayer';
import Notifications from '../components/Notifications';
import Sidebar from '../components/Sidebar';
import Container from '../components/ui/Container';
import NoUser from '../components/NoUser';
import { ContextProvider } from '../store/SocketContext';

export default function Pomoonline() {
  const [user, setUser] = useState();
  const [stillOnProgress, setStillOnProgress] = useState(true);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user')));
  }, []);

  return (
    <Container>
      <ContextProvider>
        {stillOnProgress ? (
          'still developering'
        ) : user ? (
          <div className='pomoonline'>
            <VideoPlayer />
            <Sidebar>
              <Notifications />
            </Sidebar>
          </div>
        ) : (
          <NoUser />
        )}
      </ContextProvider>
    </Container>
  );
}
