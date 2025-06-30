import { SyntheticEvent, useRef, useState } from 'react';
import { CloseVideoHOC } from '../../components/close-video-hoc/close-video-hoc';

type PlayerProps = {
  link: string;
};

export default function Player({link}: PlayerProps) {
  const [redirect, setRedirect] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playButton, setPlayButton] = useState(true);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const handleClick = () => {
    setRedirect(true);
  };

  const onButtonClick = () => {
    if (videoRef.current?.paused) {
      videoRef.current.play();
      setPlayButton(false);

    } else {
      videoRef.current?.pause();
      setPlayButton(true);
    }
  };

  const handleLoad = (evt: SyntheticEvent<HTMLVideoElement, Event>) => {
    setDuration(evt.currentTarget.duration);
  };

  const handleTimeUpdate = (evt: EventTarget & HTMLVideoElement) => {
    setProgress((evt.currentTime / evt.duration) * 100);
  };

  const onFullScreenButtonClick = () => {
    if (videoRef.current?.requestFullscreen) {
      videoRef.current?.requestFullscreen();
    }
  };

  if (redirect) {
    return <CloseVideoHOC />;
  }

  return (
    <div className="player">
      <video src={link} className="player__video" poster="img/player-poster.jpg" ref={videoRef} onTimeUpdate={(evt) => handleTimeUpdate(evt.currentTarget)} onLoadedMetadata={(evt) => handleLoad(evt)}></video>

      <button type="button" className="player__exit" onClick={handleClick}>Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={progress} max={duration.toFixed(2)}></progress>
            <div className="player__toggler" style={{left: `${progress}%`}}>Toggler</div>
          </div>
          <div className="player__time-value">{duration.toFixed(2)}</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play" onClick={onButtonClick}>
            {playButton ?
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
              </svg> :
              <svg viewBox="0 0 14 21" width="14" height="21">
                <use xlinkHref="#pause"></use>
              </svg>}
            {playButton ? <span>Play</span> : <span>Pause</span>}
          </button>
          <div className="player__name">Transpotting</div>
          <button type="button" className="player__full-screen" onClick={onFullScreenButtonClick}>
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}
