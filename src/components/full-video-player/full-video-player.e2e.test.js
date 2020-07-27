import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import FullVideoPlayer from "./full-video-player";

Enzyme.configure({
  adapter: new Adapter()
});

describe(`Test FullVideoPlayer Funcs`, () => {
  it(`Test Play/Pause Click`, () => {
    const handlePlayButtonClick = jest.fn();

    const fullVideoPlayer = shallow(
        <FullVideoPlayer
          onPlayButtonClick={handlePlayButtonClick}
          isPlaying={true}
          title={`Test`}
          timeLeft={0}
          progressBar={0}
          onFullScreenButtonClick={() => {}}
          onExitButtonClick={() => {}}>
          <video />
        </FullVideoPlayer>
    );

    const playButton = fullVideoPlayer.find(`.player__play`);
    playButton.simulate(`click`);
    expect(handlePlayButtonClick).toHaveBeenCalledTimes(1);
  });

  it(`Test Fullscreen Click`, () => {
    const handleFullScreenButtonClick = jest.fn();

    const fullVideoPlayer = shallow(
        <FullVideoPlayer
          onPlayButtonClick={() => {}}
          isPlaying={true}
          title={`Test`}
          timeLeft={0}
          progressBar={0}
          onFullScreenButtonClick={handleFullScreenButtonClick}
          onExitButtonClick={() => {}}>
          <video />
        </FullVideoPlayer>
    );

    const fullScreenButton = fullVideoPlayer.find(`.player__full-screen`);
    fullScreenButton.simulate(`click`);
    expect(handleFullScreenButtonClick).toHaveBeenCalledTimes(1);
  });

  it(`Test Esc Click`, () => {
    const handleExitButtonClick = jest.fn();

    const fullVideoPlayer = shallow(
        <FullVideoPlayer
          onPlayButtonClick={() => {}}
          isPlaying={true}
          title={`Test`}
          timeLeft={0}
          progressBar={0}
          onFullScreenButtonClick={() => {}}
          onExitButtonClick={handleExitButtonClick}>
          <video />
        </FullVideoPlayer>
    );

    const exitButton = fullVideoPlayer.find(`.player__exit`);
    exitButton.simulate(`click`);
    expect(handleExitButtonClick).toHaveBeenCalledTimes(1);
  });
});
