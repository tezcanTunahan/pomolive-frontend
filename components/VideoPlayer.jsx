import React, { useContext } from 'react';
import { SocketContext } from '../store/SocketContext';

const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } =
    useContext(SocketContext);

  return (
    <div>
      {stream && (
        <div>
          <p>{name || 'Name'}</p>
          <video playsInline muted ref={myVideo} autoPlay className='video' />
        </div>
      )}
      {callAccepted && !callEnded && (
        <div>
          <p>{call.name || 'Name'}</p>
          <video playsInline ref={userVideo} autoPlay className='video' />
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
