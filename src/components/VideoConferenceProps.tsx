import React from 'react'
import { JitsiMeeting } from '@jitsi/react-sdk'

interface VideoConferenceProps {
  roomName: string
}

function VideoConference({ roomName }: VideoConferenceProps) {
  return (
    <JitsiMeeting
      roomName={roomName}
      getIFrameRef={(node: HTMLDivElement) => {
        const iframe = node.querySelector('iframe')
        if (iframe) {
          iframe.style.height = '400px'
        }
      }}
    />
  )
}

export default VideoConference
