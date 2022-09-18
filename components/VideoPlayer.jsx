import { useContext } from 'react';
import { SocketContext } from '../store/SocketContext';

export default function VideoPlayer() {
  const { call, callAccepted, myVideo, userVideo, stream, name, callEnded } =
    useContext(SocketContext);
  return (
    <div className='videoplayer'>
      {stream && (
        <div>
          {name ? name : 'name'}
          <video
            ref={myVideo}
            playsInline
            muted
            autoPlay
            className='videoplayer__video'
          />{' '}
        </div>
      )}
      {callAccepted && !callEnded && (
        <div className='userScreen'>
          {call.name ? call.name : 'call.name'}
          <video
            ref={userVideo}
            playsInline
            muted
            autoPlay
            className='videoplayer__video'
          />
        </div>
      )}
    </div>
  );
}
