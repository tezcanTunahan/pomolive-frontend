import { ContextProvider } from '../store/SocketContext';
import Container from '../components/ui/Container';
import VideoPlayer from '../components/VideoPlayer';
import Options from '../components/Options';
import Notifications from '../components/Notifications';

export default function Pomoonline() {
  return (
    <Container>
      <ContextProvider>
        <h1>pomo online</h1>
        <div className=''>
          <VideoPlayer />
          <Options>
            <Notifications />
          </Options>
        </div>
      </ContextProvider>
    </Container>
  );
}
