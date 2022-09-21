import React, { useState, useContext } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { SocketContext } from '../store/SocketContext';
import Button from './ui/Button';
import Input from './ui/Input';

const Sidebar = ({ children }) => {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } =
    useContext(SocketContext);
  const [idToCall, setIdToCall] = useState('');
  return (
    <div className='sidebar'>
      <div noValidate autoComplete='off' className='sidebar__top'>
        <p>Account Info</p>
        <Input label='Name' value={name} onChange={(e) => setName(e.target.value)} />
        {me}
        <CopyToClipboard text={me}>
          <Button text='Copy Your ID' />
        </CopyToClipboard>
        <p>Make a call</p>
        <Input
          label='ID to call'
          value={idToCall}
          onChange={(e) => setIdToCall(e.target.value)}
        />
        {callAccepted && !callEnded ? (
          <Button onClick={leaveCall} text='Hanh up'></Button>
        ) : (
          <Button onClick={() => callUser(idToCall)} text='Call'></Button>
        )}
      </div>
      {children}
    </div>
  );
};

export default Sidebar;
