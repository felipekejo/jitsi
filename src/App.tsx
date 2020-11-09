import React, { useState } from 'react';

import VideoCall from './pages/VideoCall'

const App: React.FC = () => {
  const [displayName, setDisplayName] = useState('');
  const [roomName, setRoomName] = useState('');
  const [password, setPassword] = useState('');
  const [onCall, setOnCall] = useState(false)

  return onCall ? (<VideoCall roomName={roomName} displayName={displayName} password={password} />

  ) : (
      <>
        <h1>Crate a Meeting!</h1>
        <input
          type="text"
          placeholder="Room name"
          value={roomName}
          onChange={e => setRoomName(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <input
          type="text"
          placeholder="Your name"
          value={displayName}
          onChange={e => setDisplayName(e.target.value)}
        />
        <button onClick={() => setOnCall(true)}> Let&apos;s start!</button>
      </>
    );
};

export default App
