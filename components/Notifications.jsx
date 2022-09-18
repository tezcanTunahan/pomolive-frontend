import { useContext } from 'react';
import { SocketContext } from '../store/SocketContext';

export default function Notifications() {
  const { answerCall, call, callAccapted } = useContext(SocketContext);

  return (
    <div>
      {call.isRecivedCall && !callAccapted && (
        <div>
          <h1>{call.name} is caling</h1>
          <button onClick={answerCall}>Answer</button>
        </div>
      )}
    </div>
  );
}
