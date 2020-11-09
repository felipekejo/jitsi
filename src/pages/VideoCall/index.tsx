import React from 'react'
import Jitsi from 'react-jitsi';


interface VideoCallProp {
  roomName: string,
  displayName: string,
  password: string
}

const VideoCall: React.FC<VideoCallProp> = ({
  roomName,
  displayName,
  password
}) => {
  return (
    <>
      <Jitsi
        roomName={roomName}
        displayName={displayName}
        password={password}
        containerStyle={{ width: '100vw', height: '100vh' }}
        frameStyle={{ display: 'block', width: '100%', height: '100% ' }}


      />
    </>
  )


}

export default VideoCall
