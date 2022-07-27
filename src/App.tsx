import React from 'react';
import './App.css';
import { BackgroundVideo } from './components/backgroundVideo';
import { BackgroundAudio } from './components/backgroundAudio';
import { Countdown } from './components/countdown';

function App() {
  return (
    <div className="App">
      <BackgroundVideo src="/media/deep-water-loop.mp4" />
      <BackgroundAudio src="/media/submarine-sonar-sounds-30mins.mp3" />
      <Countdown />
    </div>
  );
}

export default App;
