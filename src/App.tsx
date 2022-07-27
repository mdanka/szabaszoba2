import React, { useCallback, useState } from 'react';
import './App.css';
import Hotkeys from 'react-hot-keys';
import { BackgroundVideo } from './components/backgroundVideo';
import { BackgroundAudio } from './components/backgroundAudio';
import { Countdown } from './components/countdown';
import { Help } from './components/help';

function App() {
  const [isHelpOpen, setIsHelpOpen] = useState<boolean>(false);

  const toggleIsHelpOpen = useCallback(
    () => setIsHelpOpen(!isHelpOpen),
    [isHelpOpen, setIsHelpOpen],
  );

  return (
    <Hotkeys 
      keyName="shift+h"
      onKeyDown={toggleIsHelpOpen}
    >
      <div>
        <BackgroundVideo src="/media/deep-water-loop.mp4" />
        <BackgroundAudio src="/media/submarine-sonar-sounds-30mins.mp3" />
        {/* <Countdown /> */}
        { isHelpOpen && <Help /> }
      </div>
    </Hotkeys>
  );
}

export default App;
