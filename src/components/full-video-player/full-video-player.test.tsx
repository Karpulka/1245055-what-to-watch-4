import * as React from "react";
import * as renderer from "react-test-renderer";
import FullVideoPlayer from "./full-video-player";

it(`Render VideoPlayer`, () => {
  const tree = renderer
    .create(<FullVideoPlayer
      isPlaying={true}
      onExitButtonClick={() => {}}
      onFullScreenButtonClick={() => {}}
      onPlayButtonClick={() => {}}
      progressBar={22}
      timeLeft={355}
      title={`Test title`}><video/></FullVideoPlayer>, {
      createNodeMock: () => {
        return {};
      }
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
