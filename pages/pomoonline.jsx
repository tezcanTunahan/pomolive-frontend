import React, { useEffect, useState } from 'react';
import VideoPlayer from '../components/VideoPlayer';
import Notifications from '../components/Notifications';
import Sidebar from '../components/Sidebar';
import Container from '../components/ui/Container';
import NoUser from '../components/NoUser';
import { ContextProvider } from '../store/SocketContext';

export default function pomoonline() {
  const [user, setUser] = useState();

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user')));
  }, []);

  return (
    <Container>
      <ContextProvider>
        {user ? (
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
