import React, { useCallback, useEffect, useState } from 'react';
import './App.css';
import Hotkeys from 'react-hot-keys';
import { BackgroundVideo } from './components/backgroundVideo';
import { BackgroundAudio } from './components/backgroundAudio';
import { Countdown } from './components/countdown';
import { Help } from './components/help';
import useCountDown from 'react-countdown-hook';
import { InputArea } from './components/inputArea';

const TIMER_INITIAL_TIME = 25 * 60 * 1000; // initial time in milliseconds
const TIMER_INTERVAL = 1000; // interval to change remaining time amount, milliseconds

function App() {
  const [isHelpOpen, setIsHelpOpen] = useState<boolean>(false);
  const [isAudioControlShown, setIsAudioControlShown] = useState<boolean>(true);
  const [timerRemaining, {
    start: startTimer,
    pause: pauseTimer,
  }] = useCountDown(TIMER_INITIAL_TIME, TIMER_INTERVAL);

  const toggleIsHelpOpen = useCallback(() => {
    setIsHelpOpen(!isHelpOpen)
  }, [isHelpOpen, setIsHelpOpen]);

  const toggleIsAudioControlShown = useCallback(() => {
    setIsAudioControlShown(!isAudioControlShown)
  }, [isAudioControlShown, setIsAudioControlShown]);

  const resetTimer = useCallback((timeMs?: number) => {
    const actualTimeMs = timeMs ?? TIMER_INITIAL_TIME;
    startTimer(actualTimeMs);
    pauseTimer();
  }, [startTimer, pauseTimer])

  const handleKeyDown = useCallback((keyName: string) => {
    switch (keyName) {
      case "shift+h":
        toggleIsHelpOpen();
        break;
      case "shift+a":
        toggleIsAudioControlShown();
        break;
      case "shift+s":
        startTimer(timerRemaining);
        break;
      case "shift+p":
        pauseTimer();
        break;
      case "shift+r":
        resetTimer(TIMER_INITIAL_TIME);
        break;
      case "shift+q":
        resetTimer(timerRemaining - (60 * 1000));
        break;
      case "shift+w":
        resetTimer(timerRemaining + (60 * 1000));
        break;
    }
  }, [
    timerRemaining,
    toggleIsHelpOpen,
    toggleIsAudioControlShown,
    startTimer,
    pauseTimer,
    resetTimer
  ]);

  useEffect(() => {
    resetTimer();
  }, [resetTimer])

  return (
    <Hotkeys 
      keyName="shift+h,shift+a,shift+s,shift+p,shift+r,shift+q,shift+w"
      onKeyDown={handleKeyDown}
    >
      <div>
        <BackgroundVideo src="/media/deep-water-loop.mp4" />
        <BackgroundAudio
          src="/media/submarine-sonar-sounds-15mins.ogg"
          isControlShown={isAudioControlShown}
        />
        <Countdown timeRemainingMs={timerRemaining} />
        <InputArea />
        { isHelpOpen && <Help /> }
      </div>
    </Hotkeys>
  );
}

export default App;
