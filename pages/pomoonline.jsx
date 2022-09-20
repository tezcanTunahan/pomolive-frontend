import React from 'react';
import VideoPlayer from '../components/VideoPlayer';
import Notifications from '../components/Notifications';
import Sidebar from '../components/Sidebar';
import Container from '../components/ui/Container';
import { ContextProvider } from '../store/SocketContext';

export default function pomoonline() {
  return (
    <Container>
      <ContextProvider>
        <div className='pomoonline'>
          <h2>Video Chat</h2>
          <VideoPlayer />
          <Sidebar>
            <Notifications />
          </Sidebar>
        </div>
      </ContextProvider>
    </Container>
  );
}
