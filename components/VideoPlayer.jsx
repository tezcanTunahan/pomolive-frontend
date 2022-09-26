import React, { useContext } from 'react';
import { SocketContext } from '../store/SocketContext';

const VideoPlayer = () => {
  const { openCamera, name, callAccepted, myVideo, userVideo, callEnded, stream, call } =
    useContext(SocketContext);

  return (
    <div className='videoplayer'>
      {stream && (
        <div className='videoplayer__container'>
          <h3>{name || 'Name'}</h3>
          <video
            playsInline
            muted
            ref={myVideo}
            autoPlay
            className='videoplayer__container__video'
          />
        </div>
      )}
      {callAccepted && !callEnded && (
        <div className='videoplayer__container'>
          <h3>{call.name || 'Name'}</h3>
          <video
            playsInline
            ref={userVideo}
            autoPlay
            className='videoplayer__container__video'
          />
        </div>
      )}
      <button onClick={openCamera}>open Camera</button>
    </div>
  );
};

export default VideoPlayer;
