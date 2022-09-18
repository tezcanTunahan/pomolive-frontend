import { useContext, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { SocketContext } from '../store/SocketContext';

export default function Options({ children }) {
  const {
    call,
    callAccepted,
    myVideo,
    userVideo,
    stream,
    name,
    setName,
    callEnded,
    me,
    callUser,
    leaveCall,
    answerCall,
  } = useContext(SocketContext);

  const [idToCall, setIdToCall] = useState('');

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()} autoComplete='off'>
        <h3>Account Info</h3>
        <input type='text' onChange={(e) => setName(e.target.value)} />
        <CopyToClipboard text={me}>
          <button>coppy your id</button>
        </CopyToClipboard>
        <h3>Make a call</h3>
        <input type='text' onChange={(e) => setIdToCall(e.target.value)} />
        {callAccepted && !callEnded ? (
          <button onClick={leaveCall}>hang up</button>
        ) : (
          <button
            onClick={() => {
              callUser(idToCall);
            }}
          >
            call
          </button>
        )}
      </form>
      {children}
    </div>
  );
}
