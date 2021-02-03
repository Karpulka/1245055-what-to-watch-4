import * as React from "react";
import {configure, shallow} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import FullVideoPlayer from "./full-video-player";
import {noop} from "../../utils";

configure({
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
          onFullScreenButtonClick={noop}
          onExitButtonClick={noop}>
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
          onPlayButtonClick={noop}
          isPlaying={true}
          title={`Test`}
          timeLeft={0}
          progressBar={0}
          onFullScreenButtonClick={handleFullScreenButtonClick}
          onExitButtonClick={noop}>
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
          onPlayButtonClick={noop}
          isPlaying={true}
          title={`Test`}
          timeLeft={0}
          progressBar={0}
          onFullScreenButtonClick={noop}
          onExitButtonClick={handleExitButtonClick}>
          <video />
        </FullVideoPlayer>
    );

    const exitButton = fullVideoPlayer.find(`.player__exit`);
    exitButton.simulate(`click`);
    expect(handleExitButtonClick).toHaveBeenCalledTimes(1);
  });
});
